import React from "react";
import { useTranslation } from "react-i18next";

import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext/authContext.tsx";

import {
  AccountPageContainer,
  AccountCard,
  Detail,
  DetailData,
  DetailWrapper,
  LogoutButton,
  Title,
} from "./styles.ts";

const Account: React.FC = () => {
  const { user, logout } = useAuthContext();

  const { t } = useTranslation();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AccountPageContainer>
      <AccountCard>
        <Title data-testid="title-test">
          {t("welcome")}, {user?.email}!
        </Title>
        <DetailWrapper>
          <Detail>{t("firstName")}: </Detail>
          <DetailData>{user?.firstName}</DetailData>
        </DetailWrapper>
        <DetailWrapper>
          <Detail>{t("lastName")}: </Detail>
          <DetailData>{user?.lastName}</DetailData>
        </DetailWrapper>

        <LogoutButton
          onClick={() => {
            logout();
          }}
        >
          Logout
        </LogoutButton>
      </AccountCard>
    </AccountPageContainer>
  );
};

export default Account;
