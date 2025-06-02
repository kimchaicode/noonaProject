import React from "react";
import styled from "styled-components";
import Spinner from "./spinner.gif";

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LoadingText = styled.p`
  font-size: 16px;
  color: #555;
`;

export const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <img src={Spinner} alt="Loading..." />
      <LoadingText>Loading...</LoadingText>
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
