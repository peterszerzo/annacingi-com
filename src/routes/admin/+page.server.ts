import { redirect } from "@sveltejs/kit";

export const load = async () => {
  throw redirect(302, "https://annacingi-com.netlify.app");
};
