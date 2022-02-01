import { fs } from "mz";
import frontMatter from "front-matter";

export const get = async () => {
  try {
    const file = (await fs.readFile("static/cms/about.md")).toString();

    const parsedFile = frontMatter(file);

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
