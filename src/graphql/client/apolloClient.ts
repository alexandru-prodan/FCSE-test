import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import Cookies from "js-cookie";

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = Cookies.get("auth_token");

  operation.setContext(({ headers }: { headers: Headers }) => ({
    headers: {
      ...headers,
      ...{
        ...(accessToken && {
          authorization: `Bearer ${accessToken}`,
        }),
      },
    },
  }));

  return forward(operation);
});
const httpLink = new HttpLink({
  uri: "https://cms.trial-task.k8s.ext.fcse.io/graphql",
});

const apiClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default apiClient;
