import { readFile } from "node:fs/promises";
import frontMatter from "front-matter";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Project } from "$lib/types";

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;

  try {
    const file = (
      await readFile(`static/cms/projects/${slug}.md`)
    ).toString();

    const parsedFile = frontMatter<Omit<Project, "body">>(file);

    return {
      ...parsedFile.attributes,
      tags: parsedFile.attributes.tags ?? [],
      body: parsedFile.attributes.archived
        ? "This page has been archived."
        : parsedFile.body,
    };
  } catch (err) {
    throw error(404, "Not found");
  }
};
