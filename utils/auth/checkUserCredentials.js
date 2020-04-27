import fetch from "isomorphic-unfetch"

export const checkUserCredentials = async (ctx) => {
  const response = await fetch(`${process.env.APP_URL}/api/auth/verify`, {
    headers: {
      cookie: ctx.req.headers.cookie,
    },
  })
  if (response.status !== 200) {
    ctx.res.writeHead(302, { Location: "/login" })
    ctx.res.end()
  }
}
