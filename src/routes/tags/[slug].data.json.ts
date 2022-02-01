import frontMatter from "front-matter";
import glob from "glob";
import { fs } from "mz";
import { fromSlug } from "../../utils";

export const get = async ({ params }) => {
  const tag = fromSlug(params.slug);

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

  const lookup = new Map();

  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      const current = lookup.get(tag);
      lookup.set(tag, [project, ...(current || [])]);
    });
  });

  return {
    body: {
      projects,
    },
  };
};
