import { fs } from "mz";
import frontMatter from "front-matter";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const { slug } = params;

  try {
    const file = (
      await fs.readFile(`static/cms/projects/${slug}.md`)
    ).toString();

    const parsedFile = frontMatter(file);

    return {
      ...parsedFile.attributes,
      body: (parsedFile.attributes as any).archived
        ? "This page has been archived."
        : parsedFile.body,
    };
  } catch (err) {
    throw error(404, "Not found");
  }
};
