import { fs } from "mz";
import frontMatter from "front-matter";

export const get = async (req, res, next) => {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  try {
    const file = (await fs.readFile("static/cms/about.md")).toString();

    const parsedFile = frontMatter(file);

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        ...parsedFile.attributes,
        body: parsedFile.body
      })
    );
  } catch (err) {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        status: 404,
        message: "Not found"
      })
    );
  }
};
