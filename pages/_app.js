import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.amplitude?.add(window.sessionReplay.plugin({ sampleRate: 1 }));
    window.amplitude?.init(
      "258a2e9d1493f4eb8dee5879130b213c",
      "user@tagaddod.com",
      {
        autocapture: {
          attribution: false,
          pageViews: false,
          sessions: false,
          formInteractions: false,
          fileDownloads: true,
          elementInteractions: false,
        },
      }
    );
  }, []);

  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
        <Script src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz"></Script>
        <Script src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.6.22-min.js.gz"></Script>
      </Layout>
    </StateContext>
  );
}

export default MyApp;
