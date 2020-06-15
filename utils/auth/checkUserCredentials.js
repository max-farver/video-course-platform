import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

export const checkUserCredentials = async (ctx) => {
  const response = await fetch(`${process.env.APP_URL}/api/auth/verify`, {
    headers: {
      cookie: ctx.req.headers.cookie,
    },
  });
  if (response.status !== 200) {
    // ctx.res.writeHeader(302, { Location: "/login" });
    // ctx.res.end();
    return false;
  }
  return true;
};

export const loginRedirect = () => {
  const router = useRouter();
  router.replace("/login");
};
