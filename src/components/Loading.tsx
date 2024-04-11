import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const LoadingSection = styled.section`
  height: calc(100vh - 20rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  cursor: wait;
`;

const LoadingImg = styled.img`
  width: 50rem;
  height: auto;
`;

const LoadingTextWrapper = styled.div`
  font-size: 2.5rem;
  line-height: 3.75rem;
  text-align: center;
`;

const LoadingText = styled.span`
  font-size: 4rem;
  animation: ${blink} 1s infinite;
`;

function Loading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingSection>
      <LoadingImg src="assets/coingecko_logo_with_dark_text.png" alt="coin gecko logo" />
      <LoadingTextWrapper>
        <LoadingText>Loading{dots}</LoadingText>
        <p>Please do not close and wait for a moment.</p>
        <p>Currently retrieving coin information from Coin Gecko.</p>
      </LoadingTextWrapper>
    </LoadingSection>
  );
}
export default Loading;
