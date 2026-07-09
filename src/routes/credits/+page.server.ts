import { type Credit } from "$lib/types";
import frontMatter from "front-matter";
import { glob } from "glob";
import { readFile } from "node:fs/promises";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const creditsFiles = await glob("static/cms/credits/*.md");

  const credits = await Promise.all(
    creditsFiles.map(async (file) => {
      const content = (await readFile(file)).toString();
      return { ...frontMatter<Credit>(content).attributes };
    }),
  );

  credits.sort(
    (a: any, b: any) =>
      new Date(b.openedAt || "2100-01-01").getTime() -
      new Date(a.openedAt || "2100-01-01").getTime(),
  );

  return {
    credits,
  };
};
