import { fs } from "mz";
import frontMatter from "front-matter";

export const get = async ({ params }) => {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = params;

  try {
    const file = (
      await fs.readFile(`static/cms/projects/${slug}.md`)
    ).toString();

    const parsedFile = frontMatter(file);

    if (parsedFile.attributes.archived) {
      throw new Error("Archived");
    }

    return {
      body: {
        ...parsedFile.attributes,
        body: parsedFile.body,
      },
    };
  } catch (err) {
    return {
      status: 404,
    };
  }
};
