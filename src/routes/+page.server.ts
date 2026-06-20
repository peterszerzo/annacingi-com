import frontMatter from "front-matter";
import type { Project } from "$lib/types";
import { glob } from "glob";
import { fs } from "mz";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const projectsFiles = await glob("static/cms/projects/*.md");

  const projects = (
    await Promise.all(
      projectsFiles.map(async (file) => {
        const content = (await fs.readFile(file)).toString();
        return { ...frontMatter<Project>(content).attributes };
      }),
    )
  )
    .map((project) => ({ ...project, tags: project.tags ?? [] }))
    .filter((project) => !project.archived);

  projects.sort(
    (a: any, b: any) =>
      new Date(b.openedAt || "2100-01-01").getTime() -
      new Date(a.openedAt || "2100-01-01").getTime(),
  );

  return {
    projects,
  };
};
