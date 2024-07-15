import { styled } from "styled-components";

export const ScreenReaderOnly = styled.h2`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

export const MainContainer = styled.div`
  max-width: var(--width-web-max);
  width: var(--width-web);
  height: 100vh;
  margin: 10rem auto;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    max-width: var(--width-tablet-max);
    width: var(--width-tablet);
  }

  @media (max-width: 768px) {
    margin: 6rem auto;
  }
`;

export const Main = styled.main`
  margin: 5rem 0;

  @media (max-width: 768px) {
    margin: 3rem 0;
  }
`;

export const NavTimebarWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
`;
