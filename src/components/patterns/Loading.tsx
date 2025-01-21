import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; // Light grey background
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 8px solid rgba(0, 0, 0, 0.1); // Light border
  border-top: 8px solid #3498db; // Blue border for animation
  border-radius: 50%;
  animation: ${spin} 1s linear infinite; // Add animation
`;

// LoadingScreen Component
const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;
