import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: right;
  & > button {
    margin-right: 1rem;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  & > button:last-child {
    margin-right: 0;
  }
  .isActive {
    font-weight: bolder;
    background-color: ${(props) => props.theme.onActiveColor};
    color: white;
  }
`;
