import { adminAuth } from "../../../utils/auth/firebaseAdmin"
import * as Cookies from "cookies"

export default async (req, res) => {
  const cookies = new Cookies(req, res)

  const sessionCookie = cookies.get("session") || ""

  cookies.set("session", "")
  await adminAuth()
    .verifySessionCookie(sessionCookie.toString())
    .then((decodedClaims) => {
      return adminAuth().revokeRefreshTokens(decodedClaims.sub)
    })
  res.end("Logged Out")
}
