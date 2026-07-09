import frontMatter from "front-matter";
import { fs } from "mz";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const content = (await fs.readFile("static/cms/cv.md")).toString();

  return {
    cvUrl: frontMatter<{ cvEnglish: string }>(content).attributes.cvEnglish,
  };
};

export const prerender = true;
