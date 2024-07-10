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

const LoadingSection = styled.section`
  height: calc(100vh - 20rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  cursor: wait;

  @media (max-width: 768px) {
    gap: 2rem;
    height: calc(100vh - 10rem);
  }
`;

const LoadingImg = styled.img`
  width: 40rem;
  height: auto;

  @media (max-width: 768px) {
    width: 30rem;
  }
`;

const LoadingTextWrapper = styled.div`
  font-size: var(--font-size-web-large);
  line-height: calc(var(--font-size-web-large) * 1.5);
  text-align: center;

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-large);
    line-height: calc(var(--font-size-mobile-large) * 1.5);
  }
`;

const LoadingText = styled.span`
  font-size: var(--font-size-web-extra-large);
  line-height: calc(var(--font-size-web-extra-large) * 1.5);
  animation: ${blink} 1s infinite;

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-extra-large);
    line-height: calc(var(--font-size-mobile-extra-large) * 1.5);
  }
`;

function LoadingPage() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingSection>
      <LoadingImg src="/assets/coingecko_logo_with_dark_text.png" alt="coin gecko logo" />
      <LoadingTextWrapper>
        <LoadingText>Loading{dots}</LoadingText>
        <p>Please do not close and wait for a moment.</p>
        <p>Currently retrieving coin information from Coin Gecko.</p>
      </LoadingTextWrapper>
    </LoadingSection>
  );
}
export default LoadingPage;
