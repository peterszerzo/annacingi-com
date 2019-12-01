import projects from "../db/_projects.js";
import { fromSlug } from "../../utils.js";

const lookup = new Map();

projects.forEach(project => {
  project.tags.forEach(tag => {
    const current = lookup.get(tag);
    lookup.set(tag, [project, ...(current || [])]);
  });
});

export function get(req, res, next) {
  const tag = fromSlug(req.params.slug);

  if (lookup.has(tag)) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(lookup.get(tag)));
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
