import { GlobalStyles, css } from "twin.macro";
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
      <Global
        styles={css`
          body {
            font-family: "Lato", Helvetica, Arial, sans-serif;
          }
        `}
      />
    </>
  );
}

export default MyApp;
