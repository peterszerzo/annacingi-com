import { fs } from "mz";
import frontMatter from "front-matter";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  try {
    const file = (await fs.readFile("static/cms/about.md")).toString();

    const parsedFile = frontMatter<{ portraitUrl: string }>(file);

    return {
      body: parsedFile.body,
      portraitUrl: parsedFile.attributes.portraitUrl,
    };
  } catch (err) {
    throw error(404, "Something went wrong");
  }
};
