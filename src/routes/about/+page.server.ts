import { fs } from "mz";
import frontMatter from "front-matter";
import { error } from "@sveltejs/kit";

export const load = async () => {
  try {
    const file = (await fs.readFile("static/cms/about.md")).toString();

    const parsedFile = frontMatter<{}>(file);

    return {
      ...parsedFile.attributes,
      body: parsedFile.body,
    };
  } catch (err) {
    throw error(404, "Not found");
  }
};
