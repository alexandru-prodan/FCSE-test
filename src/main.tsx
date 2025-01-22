import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import I18n from "./components/core/i18n/i18n.ts";
import client from "./graphql/client/apolloClient.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <I18nextProvider i18n={I18n}>
        <App />
      </I18nextProvider>
    </ApolloProvider>
  </React.StrictMode>
);
