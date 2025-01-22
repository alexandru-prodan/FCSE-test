import React, { SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import {
  LOGIN_MUTATION,
  UsersPermissionsLoginInput,
  UsersPermissionsLoginPayload,
} from "../../graphql/mutations/login.ts";
import { useAuthContext } from "../../context/authContext/authContext.tsx";
import { sanitizeInput } from "../utils/sanitizeInput.ts";
import {
  BackgroundContainer,
  Container,
  SubmitButton,
  Form,
  FormGroup,
  Error,
  ErrorText,
  Title,
  Label,
  Input,
} from "./styles.ts";
import { useTranslation } from "react-i18next";

// Types for the form inputs
interface LoginForm {
  email: string;
  password: string;
}

export interface ErrorMessage {
  errors: {
    extensions: {
      exception: { data: { data: { messages: { message: string }[] }[] } };
    };
  }[];
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onBlur",
  });

  const { t } = useTranslation();

  const { login: auth } = useAuthContext();

  const [loginError, setLoginError] = useState<string | null>(null);

  const [login, { loading }] = useMutation<
    UsersPermissionsLoginPayload,
    { input: UsersPermissionsLoginInput }
  >(LOGIN_MUTATION, {
    fetchPolicy: "network-only",
    errorPolicy: "all",
  });

  const onSubmit: SubmitHandler<LoginForm> = async (formData: LoginForm) => {
    setLoginError(null);

    try {
      const { data, errors } = await login({
        variables: {
          input: {
            identifier: sanitizeInput(formData.email),
            password: sanitizeInput(formData.password),
          },
        },
      });

      if (errors && errors[0].extensions) {
        // @ts-ignore
        const errorMessage: ErrorMessage = errors[0].extensions.exception.data
          ?.data[0].messages[0].message as ErrorMessage;

        return setLoginError(errorMessage as SetStateAction<any>);
      }

      if (data && data.login && data.login.jwt) {
        auth({ token: data.login.jwt, id: data.login.user.id });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BackgroundContainer>
      <Container>
        <Title>Login</Title>

        {loginError && <Error data-testid="error-state">{loginError}</Error>}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="email">{t("email")}</Label>
            <Input
              data-testid="input-email"
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Email is not valid",
                },
              })}
              placeholder={`${t("email_placeholder")}`}
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">{t("Password")}</Label>
            <Input
              data-testid="input-password"
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder={`${t("password_placeholder")}`}
            />
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </FormGroup>

          <SubmitButton
            data-testid="submit-action"
            disabled={loading}
            type="submit"
          >
            Login
          </SubmitButton>
        </Form>
      </Container>
    </BackgroundContainer>
  );
};

export default Login;
