import * as admin from "firebase-admin"

const serviceAccount = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://video-course-platform.firebaseio.com",
  })
}

export const adminAuth = admin.auth
