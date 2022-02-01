export const fromSlug = (str: string) => str.replace(/\-\-/g, " ");

export const toSlug = (str: string) => str.replace(/\ /g, "--");
