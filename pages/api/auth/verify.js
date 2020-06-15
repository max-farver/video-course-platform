import { adminAuth } from "../../../utils/auth/firebaseAdmin";
import * as Cookies from "cookies";

export default async (req, res) => {
  const cookies = new Cookies(req, res);

  const sessionCookie = cookies.get("session") || "";
  // Verify the session cookie. In this case an additional check is added to detect
  // if the user's Firebase session was revoked, user deleted/disabled, etc.
  await adminAuth()
    .verifySessionCookie(sessionCookie.toString(), true /** checkRevoked */)
    .then((decodedClaims) => {
      res.status(200).end(
        JSON.stringify({
          message: "User is valid",
          isVerified: true,
          claims: JSON.stringify(decodedClaims),
        })
      );
    })
    .catch((error) => {
      // Session cookie is unavailable or invalid. Force user to login.
      res.status(401).end(
        JSON.stringify({
          message: "UNAUTHORIZED",
          isVerified: false,
        })
      );
    });
};
