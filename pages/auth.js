import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  GithubAuthProvider,
  getAuth,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import Image from "next/image";
const {
  initializeAppCheck,
  ReCaptchaV3Provider,
} = require("firebase/app-check");

// import { useEffect } from "react";

export default function Auth() {
  const [userProfile, setUserProfile] = useState(null);
  const [auth, setAuth] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    // Firebase
    // const analytics = getAnalytics(app);
    const firebaseConfig = {
      apiKey: "AIzaSyA_KyfQInFizteWJ8QTRM1Sq7bE9-3aYEU",
      authDomain: "codein-july2022.firebaseapp.com",
      projectId: "codein-july2022",
      storageBucket: "codein-july2022.appspot.com",
      messagingSenderId: "813188683688",
      appId: "1:813188683688:web:328743a2678cf5b4a7ef9d",
      measurementId: "G-8X2V4TSK5T",
    };
    const app = initializeApp(firebaseConfig);
    // Getting started with AUTH
    // ALTERNATIVE?? const auth = app.auth();
    setAuth(getAuth());
    setProvider(new GithubAuthProvider());

    // Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
    // key is the counterpart to the secret key you set in the Firebase console.
    // https://firebase.google.com/docs/app-check/web/recaptcha-provider?authuser=0&hl=en
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(
        "6Le9di0hAAAAAGQjv34Bo9yxlQxFhe9UIxH5KetP"
      ),
      // Optional argument. If true, the SDK automatically refreshes App Check
      // tokens as needed.
      isTokenAutoRefreshEnabled: true,
    });

    onAuthStateChanged(getAuth(app), (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUserProfile(user);
        // ...
      } else {
        setUserProfile(null);
      }
    });
  }, []);

  const handleLogout = async () => {
    // const auth = getAuth();
    await signOut(auth);
  };
  const handleLogin = async () => {
    // Firebase
    // provider.addScope("repo");
    // provider.setCustomParameters({
    //   allow_signup: "false",
    // });
    const x = await signInWithRedirect(auth, provider);
    alert(x);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Auth</title>
        <meta name="description" content="codein.ca" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section
          style={{
            display: "flex",
          }}
        >
          <span style={{ color: "gray", marginRight: "8px" }}>
            User status:{" "}
            <span
              style={{
                color: userProfile === null ? "crimson" : "dodgerblue",
                fontWeight: "bold",
              }}
            >
              {userProfile === null ? "Not logged in" : userProfile.displayName}
            </span>
          </span>
          {!userProfile ? (
            <button onClick={handleLogin}>Sign In</button>
          ) : (
            <button onClick={handleLogout}>Sign Out</button>
          )}
        </section>

        <Image
          priority={true}
          quality={100}
          placeholder={"blur"}
          blurDataURL={"/codein-logo-blur.webp"}
          height={userProfile === null ? 309 : 460}
          width={userProfile === null ? 425 : 460}
          src={
            userProfile === null ? "/codein-logo.webp" : userProfile.photoURL
          }
          alt={
            userProfile === null
              ? "codein.ca logo"
              : `${userProfile.displayName} avatar`
          }
        />
      </main>
    </div>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <RegularLayout>{page}</RegularLayout>;
// };
