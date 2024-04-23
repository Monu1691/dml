// import "@/styles/globals.css";
import "@/scss/digi.scss";

import { ApolloProvider } from '@apollo/client';
import { client } from "@/lib/Apollo/apollo";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
