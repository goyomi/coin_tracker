import { styled } from "styled-components";

export const MainContainer = styled.div`
  margin: 6.6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  table {
    thead,
    tbody {
      border: 1px solid ${(props) => props.theme.borderColor};
    }
    thead > tr > th {
      padding: 1.85rem 0;
    }
    thead > tr > th:first-child {
      padding-left: 2.4rem;
    }
    thead > tr > th:last-child {
      padding-right: 2.4rem;
    }
  }
`;
