import styled from "styled-components";

const ErrorArticle = styled.article`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f8;
  strong {
    font-size: 6rem;
    line-height: 9rem;
    font-weight: bolder;
  }
  p {
    font-size: 3rem;
    line-height: 4rem;
    color: ${(props) => props.theme.secondFontColor};
  }
  p:nth-of-type(2) {
    margin-bottom: 1.5rem;
  }
`;

function ErrorPage() {
  return (
    <ErrorArticle>
      <img src="/assets/error_image.jpeg" alt="unplugged code" />
      <strong>404</strong>
      <p>It may take a few minutes to reload.</p>
      <p>Please press the refresh button or wait for a moment.</p>
      <p>The API used on the site is free, so there are limitations on its use😭.</p>
    </ErrorArticle>
  );
}

export default ErrorPage;
