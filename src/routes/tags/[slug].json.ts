import frontMatter from "front-matter";
import glob from "glob";
import { fs } from "mz";

export const get = async ({ params }) => {
  const slug = decodeURIComponent(params.slug);

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
    projectsFiles.map(async (file) => {
      const content = (await fs.readFile(file)).toString();
      return { ...frontMatter(content).attributes };
    })
  );

  const filteredProjects = projects.filter(
    (project) => (project.tags || []).includes(slug) || project.group === slug
  );

  filteredProjects.sort(
    (a, b) =>
      new Date(b.openedAt || "2100-01-01").getTime() -
      new Date(a.openedAt || "2100-01-01").getTime()
  );

  return {
    body: filteredProjects,
  };
};
