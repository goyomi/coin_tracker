import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { CoinListContext } from "../contexts/Context";

const ErrorArticle = styled.article`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f8;
`;

const ErrorImage = styled.img`
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const ErrorCode = styled.strong`
  font-size: 6rem;
  line-height: 9rem;
  font-weight: bolder;
  color: #000;

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
  p {
    color: #000;
  }
  p:nth-of-type(2) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-extra-large);
    line-height: calc(var(--font-size-mobile-extra-large) * 1.5);
  }
`;

function ErrorPage() {
  // const { isError } = useContext(CoinListContext);
  // const history = useHistory();
  // useEffect(() => {
  //   if (!isError) {
  //     console.log("에러가 아닙니다");
  //     history.goBack();
  //   }
  // }, [isError, history]);

  return (
    <ErrorArticle>
      <ErrorImage src="assets/error_image.jpeg" alt="unplugged code" />
      <ErrorCode>404</ErrorCode>
      <ErrorMessageWrapper>
        <p>It may take a few minutes to reload.</p>
        <p>Please wait for a moment.</p>
        <p>The API used on the site is free, so there are limitations on its use😭.</p>
      </ErrorMessageWrapper>
    </ErrorArticle>
  );
}

export default ErrorPage;
