import { GlobalStyle } from "../styles/globals";
import { ChainId, Config, DAppProvider } from "@usedapp/core";
import { useDappConfig } from "../../constants";
import { Popup } from "../components/Popup";
import { FireBaseProvider } from "../utils/useFirebaseContainer";
// disable ssr for next.js
// https://dev.to/apkoponen/how-to-disable-server-side-rendering-ssr-in-next-js-1563

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <FireBaseProvider>
        <DAppProvider config={useDappConfig}>
          <Popup>
            <GlobalStyle />
            <Component {...pageProps} />
          </Popup>
        </DAppProvider>
      </FireBaseProvider>
    </SafeHydrate>
  );
}

export default MyApp;
