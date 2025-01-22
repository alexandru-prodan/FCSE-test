import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Account from "./Account.tsx";
import { GET_USER_DATA } from "../../graphql/queries/getUserData.ts";
import { AuthContextMock } from "../utils/tests/mockContext.tsx";

const mockAuthData = {
  user: {
    id: "2",
    firstName: "John ",
    lastName: "Doe",
    email: "john.doe@example.com",
  },
  logout: () => {},
  login: () => {},
  authError: "",
  loading: false,
  isAuthenticated: true,
};

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

const mocks = [
  {
    request: {
      query: GET_USER_DATA,
      variables: { id: "2" },
    },
    result: {
      data: {
        user: {
          id: "2",
          firstName: "John ",
          lastName: "Doe",
          email: "john.doe@example.com",
        },
      },
    },
  },
];

test("renders Account component snapshot", () => {
  const { asFragment } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AuthContextMock {...mockAuthData}>
        <Account />
      </AuthContextMock>
    </MockedProvider>
  );

  // Use toMatchSnapshot to generate or compare a snapshot
  expect(asFragment()).toMatchSnapshot();
});

test("renders user profile", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AuthContextMock {...mockAuthData}>
        <Account />
      </AuthContextMock>
    </MockedProvider>
  );

  expect(screen.getByTestId("title-test")).toBeInTheDocument();
});
