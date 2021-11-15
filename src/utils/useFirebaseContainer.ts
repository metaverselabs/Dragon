import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import {
  getFunctions,
  httpsCallable,
  HttpsCallable,
  connectFunctionsEmulator,
} from "firebase/functions";
import { useEffect, useRef } from "react";
import { createContainer } from "unstated-next";
import { API_END_POINT_NAME } from '../../constants'

// ----- setting ----
const firebaseConfig = {
  apiKey: "AIzaSyBGYdWcwq6HLJQ0Hyr32Zj1T8SYGQxc_vM",
  authDomain: "dragon-airdrop-e3ecf.firebaseapp.com",
  projectId: "dragon-airdrop-e3ecf",
  storageBucket: "dragon-airdrop-e3ecf.appspot.com",
  messagingSenderId: "123223907212",
  appId: "1:123223907212:web:fc66b80605a8f4764914a9",
  measurementId: "G-M0JLEVJM91"
};

const ReCaptchaV3SiteKey = `${process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY}`;
// ----- setting ----

const useFirebase = () => {
  const checkApiRef = useRef<HttpsCallable<any, any>>(null);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    getAnalytics(app);

    // Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
    // key is the counterpart to the secret key you set in the Firebase console.
    const appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(ReCaptchaV3SiteKey),

      // Optional argument. If true, the SDK automatically refreshes App Check
      // tokens as needed.
      isTokenAutoRefreshEnabled: true,
    });
    const functions = getFunctions(app);
    console.log("functions", functions);
    const check = httpsCallable(functions, API_END_POINT_NAME);
    console.log("check", check);
    checkApiRef.current = check;
  }, []);

  return { checkApiRef };
};

export const {
  Provider: FireBaseProvider,
  useContainer: useFirebaseContainer,
} = createContainer(useFirebase);
