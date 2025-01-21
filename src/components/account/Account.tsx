import React from "react";
import styled from "styled-components";
import { useAuthContext } from "../../context/authContext/authContext.tsx";
import { Navigate } from "react-router-dom";

const Account: React.FC = () => {
  const { user, logout } = useAuthContext();

  console.log("user", user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AccountPageContainer>
      <AccountCard>
        <Title>Welcome back, {user?.email}!</Title>
        <DetailWrapper>
          <Detail>Your First Name: </Detail>
          <DetailData>{user?.firstName}</DetailData>
        </DetailWrapper>
        <DetailWrapper>
          <Detail>Your Last Name: </Detail>
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

const AccountPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const AccountCard = styled.div`
  width: 430px;
  max-width: 90%;
  padding: 20px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  min-height: 200px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Detail = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 5px 0;
`;

const DetailData = styled.p`
  font-size: 1.05rem;
  color: #555;
  font-weight: 600;
  margin: 10px 0;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoutButton = styled.button`
  width: 90%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  &:hover {
    background: rgb(200, 50, 70);

    filter: brightness(1.15);
  }
  font-family: Montserrat;
`;
