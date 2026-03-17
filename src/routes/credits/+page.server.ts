import frontMatter from "front-matter";
import { glob } from "glob";
import { fs } from "mz";

export const load = async () => {
  const creditsFiles = await glob("static/cms/credits/*.md");

  const credits = await Promise.all(
    creditsFiles.map(async (file) => {
      const content = (await fs.readFile(file)).toString();
      return { ...frontMatter(content).attributes };
    })
  );

  credits.sort(
    (a: any, b: any) =>
      new Date(b.openedAt || "2100-01-01").getTime() -
      new Date(a.openedAt || "2100-01-01").getTime()
  );

  return {
    credits,
  };
};
