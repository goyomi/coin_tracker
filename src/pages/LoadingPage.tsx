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
  img {
    width: 50rem;
    height: auto;
  }
  .loading_text_wrapper {
    font-size: 2.5rem;
    line-height: 3.75rem;
    text-align: center;
  }
  .loading {
    font-size: 4rem;
    animation: ${blink} 1s infinite;
  }
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
      <img src="assets/coingecko_logo_with_dark_text.png" alt="coin gecko logo" />
      <div className="loading_text_wrapper">
        <span className="loading">Loading{dots}</span>
        <p>Please do not close and wait for a moment.</p>
        <p>Currently retrieving coin information from Coin Gecko.</p>
      </div>
    </LoadingSection>
  );
}
export default Loading;
