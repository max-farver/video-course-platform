export const checkUserCredentials = async (ctx) => {
  const response = await fetch("http://localhost:3000/api/auth/verify", {
    headers: {
      cookie: ctx.req.headers.cookie,
    },
  })
  if (response.status === !200) {
    ctx.res.writeHead(302, { Location: "/" })
    ctx.res.end()
  }
}
