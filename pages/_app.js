import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

// import "@/styles/globals.css";
import "@/scss/digi.scss";

import { ApolloProvider } from '@apollo/client';
import { client } from "@/lib/Apollo/apollo";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </ApolloProvider>
  );
}
