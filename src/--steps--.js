/**
 *              ---------------------------
 *                  INITIAL INSTALLATION
 *              ---------------------------
 * 
 * 1. Visit: console.firebase.google.com
 * 2. Create project (skip google analaytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. Add config file to your project
 * 6. DANGER: Do not publis or make firebase config to public by pusshing those to github
 * 
 *               -------------------
 *                   INTEGRETION
 *               -------------------
 * 
 * 7.Visit: Go to Docs > Build > Athuntication > Web > Get started
 * 8. export app from the firebase.config.js file: export default app;
 * 9. Login.jsx: import { getAuth } from "firebase/auth";
 * 10. create const auth = getAuth(app)
 * 
 *            -----------------------
 *                 PROVIDER SETUP
 *            -----------------------
 * 
 * 11. import GoogleAuthProvider and create new provider
 * 12. use singInWithPopUp and pass auth and provider
 * 13. Activet singIn method (google, facebook, github, email password, etc)
 * 14. [Vite]: change 127.0.0.1 to localhost
 * 
 * -------------------------
 *    More Auth Provider
 * -------------------------
 * 1. activet the auth provider (create app, provide redirect url, client id, client secret)
 * */