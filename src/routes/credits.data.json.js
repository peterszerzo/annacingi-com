import frontMatter from "front-matter";
import glob from "glob";
import { fs } from "mz";

export const get = async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  // Projects

  const creditsFiles = await new Promise((resolve, reject) => {
    glob("static/cms/credits/*.md", (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });

  const credits = await Promise.all(
    creditsFiles.map(async (file) => {
      const content = (await fs.readFile(file)).toString();
      return { ...frontMatter(content).attributes };
    })
  );

  credits.sort(
    (a, b) =>
      new Date(b.openedAt || "2100-01-01").getTime() -
      new Date(a.openedAt || "2100-01-01").getTime()
  );

  res.end(JSON.stringify({ credits }));
};
