import frontMatter from "front-matter";
import { glob } from "glob";
import { fs } from "mz";

export const load = async () => {
  const projectsFiles = await glob("static/cms/projects/*.md");

  const projects = await Promise.all(
    projectsFiles.map(async (file) => {
      const content = (await fs.readFile(file)).toString();
      return { ...frontMatter(content).attributes };
    })
  );

  projects.sort(
    (a: any, b: any) =>
      new Date(b.openedAt || "2100-01-01").getTime() -
      new Date(a.openedAt || "2100-01-01").getTime()
  );

  return {
    projects: projects.filter((project: any) => !project.archived),
  };
};
