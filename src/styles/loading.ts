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
