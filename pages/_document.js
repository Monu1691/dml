import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header/>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
