import * as admin from "firebase-admin"

const serviceAccount = {
  type: process.env.FIREBASE_ADMIN_type,
  project_id: process.env.FIREBASE_ADMIN_project_id,
  key_id: process.env.FIREBASE_ADMIN_private_key_id,
  private_key: process.env.FIREBASE_ADMIN_private_key,
  client_email: process.env.FIREBASE_ADMIN_client_email,
  client_id: process.env.FIREBASE_ADMIN_client_id,
  auth_uri: process.env.FIREBASE_ADMIN_auth_uri,
  token_uri: process.env.FIREBASE_ADMIN_token_uri,
  auth_provider_x509_cert_url:
    process.env.FIREBASE_ADMIN_auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.FIREBASE_ADMIN_client_x509_cert_url,
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://video-course-platform.firebaseio.com",
  })
}

export const adminAuth = admin.auth
