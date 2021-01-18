import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { extractCritical } from "@emotion/server";

export default class MyDocument extends Document<{
  ids: string[];
  css: string;
}> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(" ")}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
          <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <script async defer data-domain="vocefoimetaforado.com.br" src="https://plausible.io/js/plausible.js"></script>
          <meta property="og:locale" content="pt_BR"/>
          <meta property="og:title" content="Você acaba de ser M E T A F O R A D O."/>
          <meta property="og:site_name" content="Você foi metaforado"/>
          <meta property="og:image" content="https://yt3.ggpht.com/ytc/AAUvwni6Sr6MnxAe_R3KYN8qauo-zjvRBhcYUE8NE32Nkg=s176-c-k-c0x00ffffff-no-rj"/>
          <meta property="og:image:type" content="image/jpeg"/>

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
