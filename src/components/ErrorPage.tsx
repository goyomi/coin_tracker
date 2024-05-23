import { useEffect, useState } from "react";
import styled from "styled-components";

const ErrorArticle = styled.article`
  width: 100vw;
  height: calc(100vh - 15rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10rem;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const ErrorImage = styled.img`
  width: 35%;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const ErrorCode = styled.strong`
  font-size: 6rem;
  line-height: 9rem;
  font-weight: bolder;

  @media (max-width: 768px) {
    font-size: 4rem;
    line-height: 6rem;
  }
`;

const ErrorMessageWrapper = styled.div`
  width: 65%;
  font-size: var(--font-size-web-extra-large);
  line-height: calc(var(--font-size-web-extra-large) * 1.5);
  text-align: center;
  p:nth-of-type(2) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-extra-large);
    line-height: calc(var(--font-size-mobile-extra-large) * 1.5);
  }
`;

const GoBackButton = styled.button`
  margin: 1rem 0 5rem;
  padding: 1rem;
  width: 10rem;
  background-color: ${(props) => props.theme.onActiveColor};
  border-radius: 0.5rem;
  font-size: var(--font-size-web-medium);

  @media (max-width: 768px) {
    width: 7rem;
    font-size: var(--font-size-mobile-medium);
  }
`;

function ErrorPage({ isError, refetch }: { isError: boolean; refetch: () => void }) {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorArticle>
      <ErrorImage src="assets/error_image.jpeg" alt="unplugged code" />
      <ErrorCode>404</ErrorCode>
      <ErrorMessageWrapper>
        <p>It may take a few minutes to reload.</p>
        <p>Please wait for a moment.</p>
        <p>The API used on the site is free, so there are limitations on its use😭.</p>
        <p>Please click the 'Go Back' button when it appears in one minute.</p>
      </ErrorMessageWrapper>
      {showButton && <GoBackButton onClick={refetch}>Go Back</GoBackButton>}
    </ErrorArticle>
  );
}

export default ErrorPage;
