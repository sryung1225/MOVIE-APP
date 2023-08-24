import styled, { keyframes } from "styled-components";

function Loading() {
  return (
    <SpinnerBox>
      <Spinner />
    </SpinnerBox>
  );
}

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: 3px solid #fff;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;

export default Loading;
