import React, { useEffect } from "react";
import { init, ErrorBoundary, showReportDialog } from "@sentry/react";
import { ThemeSwitcher } from "@chainsafe/common-theme";
import {
  CssBaseline,
  Router,
  ToasterProvider,
} from "@chainsafe/common-components";

import Routes from "./Components/Routes";
import { lightTheme } from "./Themes/LightTheme";
import { ChainbridgeProvider } from "./Contexts/ChainbridgeContext";
import AppWrapper from "./Layouts/AppWrapper";
import { useWeb3, Web3Provider } from "@chainsafe/web3-context";
import { chainbridgeConfig } from "./chainbridgeConfig";
import { utils } from "ethers";
import { ReactComponent as ImgBackCircle1 } from "./assets/img_back_circle_1.svg";
import { ReactComponent as ImgBackCircle2 } from "./assets/img_back_circle_2.svg";
import { switchToNetwork } from "./Utils/switchToNetwork";

if (
  process.env.NODE_ENV === "production" &&
  process.env.REACT_APP_SENTRY_DSN_URL &&
  process.env.REACT_APP_SENTRY_RELEASE
) {
  init({
    dsn: process.env.REACT_APP_SENTRY_DSN_URL,
    release: process.env.REACT_APP_SENTRY_RELEASE,
  });
}

const App: React.FC<{}> = () => {
  const tokens = chainbridgeConfig.chains.reduce((tca, bc) => {
    return {
      ...tca,
      [bc.networkId]: bc.tokens,
    };
  }, {});
  useEffect(() => {
    const ethereum = (window as any)?.ethereum;
    ethereum?.removeAllListeners(["networkChanged"]);
  }, []);

  return (
    <ErrorBoundary
      fallback={({ error, componentStack, eventId, resetError }) => (
        <div>
          <p>
            An error occurred and has been logged. If you would like to provide
            additional info to help us debug and resolve the issue, click the
            "Provide Additional Details" button
          </p>
          <p>{error?.message.toString()}</p>
          <p>{componentStack}</p>
          <p>{eventId}</p>
          <button onClick={() => showReportDialog({ eventId: eventId || "" })}>
            Provide Additional Details
          </button>
          <button onClick={resetError}>Reset error</button>
        </div>
      )}
      onReset={() => window.location.reload()}
    >
      <ThemeSwitcher themes={{ light: lightTheme }}>
        <CssBaseline />
        <ToasterProvider autoDismiss>
          <Web3Provider
            tokensToWatch={tokens}
            onboardConfig={{
              walletSelect: {
                wallets: [{ walletName: "metamask", preferred: true }],
              },
              subscriptions: {
                network: (network) => console.log("chainId: ", network),
                balance: (amount) =>
                  console.log("balance: ", utils.formatEther(amount)),
              },
            }}
            checkNetwork={false}
            gasPricePollingInterval={120}
            gasPriceSetting="fast"
          >
            <ChainbridgeProvider>
              <Router>
                <ImgBackCircle1 className={"back-circle-1"} />
                <ImgBackCircle2 className={"back-circle-2"} />
                <AppWrapper>
                  <Routes />
                </AppWrapper>
              </Router>
            </ChainbridgeProvider>
          </Web3Provider>
        </ToasterProvider>
      </ThemeSwitcher>
    </ErrorBoundary>
  );
};

export default App;
