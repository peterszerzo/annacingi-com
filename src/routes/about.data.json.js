import { fs } from "mz";

export const get = async (req, res, next) => {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  try {
    const file = (await fs.readFile("static/cms/about.md")).toString();

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        body: file
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
