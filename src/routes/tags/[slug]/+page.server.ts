import frontMatter from "front-matter";
import { glob } from "glob";
import { fs } from "mz";

export const load = async ({ params }) => {
  const slug = decodeURIComponent(params.slug);

  const projectsFiles = await glob("static/cms/projects/*.md");

  const projects = await Promise.all(
    projectsFiles.map(async (file) => {
      const content = (await fs.readFile(file)).toString();
      return { ...frontMatter(content).attributes };
    })
  );

  const filteredProjects = projects.filter(
    (project: any) => (project.tags || []).includes(slug) || project.group === slug
  );

  filteredProjects.sort(
    (a: any, b: any) =>
      new Date(b.openedAt || "2100-01-01").getTime() -
      new Date(a.openedAt || "2100-01-01").getTime()
  );

  return {
    projects: filteredProjects,
  };
};
