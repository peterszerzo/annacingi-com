import frontMatter from "front-matter";
import { readFile } from "node:fs/promises";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  // return {
  //   cvUrl: "/cms/images/annacingi-engcv-jul26.pdf",
  // };
  const content = (await readFile("static/cms/cv.md")).toString();

  return {
    cvUrl: frontMatter<{ cvEnglish: string }>(content).attributes.cvEnglish,
  };
};

export const prerender = true;
