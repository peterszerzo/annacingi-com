import frontMatter from "front-matter";
import glob from "glob";
import { fs } from "mz";

export const get = async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  // Projects

  const projectsFiles = await new Promise((resolve, reject) => {
    glob("static/cms/projects/*.md", (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });

  const projects = await Promise.all(
    projectsFiles.map(async file => {
      const content = (await fs.readFile(file)).toString();
      return { ...frontMatter(content).attributes };
    })
  );

  projects.sort(
    (a, b) => new Date(b.openedAt).getTime() - new Date(a.openedAt).getTime()
  );

  res.end(JSON.stringify({ projects }));
};
