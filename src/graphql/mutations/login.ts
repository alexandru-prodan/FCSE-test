import { gql } from "@apollo/client";

// Define the GraphQL mutation
export const LOGIN_MUTATION = gql`
  mutation login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
      }
    }
  }
`;

// Define the input type for the mutation
export type UsersPermissionsLoginInput = {
  identifier: string;
  password: string;
};

// Define the response type
export type UsersPermissionsLoginPayload = {
  login: {
    user: { id: string };
    jwt: string;
  };
};
