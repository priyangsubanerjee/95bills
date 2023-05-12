import GlobalStateContext from "@/states/globalStateContext";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  return (
    <GlobalStateContext.Provider
      value={{
        sidenavOpen,
        setSidenavOpen,
      }}
    >
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </GlobalStateContext.Provider>
  );
}
