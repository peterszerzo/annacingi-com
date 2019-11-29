import projects from "../db/_projects.js";

const lookup = new Map();

projects.forEach(project => {
  project.tags.forEach(tag => {
    const current = lookup.get(tag);
    lookup.set(tag, [JSON.stringify(project), ...(current || [])]);
  });
});

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const slug = req.params.slug.replace(/\-\-/g, "-");

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: `Not found`
      })
    );
  }
}
