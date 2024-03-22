import styled from "styled-components";

export const HeadTitle = styled.header`
  position: fixed;
  top: 0;
  left: auto;
  width: 114rem;
  height: 10rem;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 0.1rem ${(props) => props.theme.grey1Color};
  h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 10rem;
  }
  .github,
  .email {
    width: 2.5rem;
    height: 2.5rem;
  }
  .github {
    margin-right: 2rem;
  }
`;
