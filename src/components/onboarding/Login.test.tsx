import { fireEvent, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Login from "./Login.tsx";
import { LOGIN_MUTATION } from "../../graphql/mutations/login.ts";
import { AuthContextMock } from "../utils/tests/mockContext.tsx";

const mockAuthData = {
  user: null,
  logout: () => {},
  login: () => {},
  authError: "",
  loading: false,
  isAuthenticated: false,
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
      query: LOGIN_MUTATION,
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
        <Login />
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
        <Login />
      </AuthContextMock>
    </MockedProvider>
  );

  expect(screen.getByTestId("submit-action")).toBeInTheDocument();
});

test("handles error state", async () => {
  const errorMocks = [
    {
      request: {
        query: LOGIN_MUTATION,
        variables: {
          input: { identifier: "test@example.com", password: "password123" },
        },
      },
      result: {
        errors: [
          {
            extensions: {
              exception: {
                data: {
                  data: [{ messages: [{ message: "Wrong credentials" }] }],
                },
              },
            },
          },
        ],
      },
    },
  ];


  render(
      // @ts-ignore
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <AuthContextMock {...mockAuthData}>
        <Login />
      </AuthContextMock>
    </MockedProvider>
  );

  fireEvent.change(screen.getByTestId("input-email"), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByTestId("input-password"), {
    target: { value: "password123" },
  });

  fireEvent.click(screen.getByTestId("submit-action"));

  const errorMessage = await screen.findByTestId("error-state");
  expect(errorMessage).toBeInTheDocument();
});
