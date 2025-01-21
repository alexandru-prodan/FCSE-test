import styled, { keyframes } from "styled-components";

const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(45deg, #ff6f61, #ff9a8b, #f76c6c, #ff6a8d);
  background-size: 400% 400%;
  animation: ${backgroundAnimation} 7s ease infinite;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${backgroundAnimation} 10s ease infinite;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
  font-family: Montserrat !important;
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
  font-family: Montserrat;

  color: black;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(255, 111, 97, 0.6);
    color: black;
  }

  &:hover {
    border-color: #ff9a8b;
    color: black;
  }

  &::placeholder {
    color: #999;
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  font-family: Montserrat;
`;

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const SubmitButton = styled.button`
  max-width: 100%;
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
    animation: ${jump} 0.2s ease-out forwards;

    filter: brightness(1.15);
  }
  &:focus {
    background: rgb(150, 200, 70) !important;
    outline: black !important;
  }
  font-family: Montserrat;
`;

export const Error = styled.div`
  background-color: #ffcccc;
  color: red;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 4px;
`;
