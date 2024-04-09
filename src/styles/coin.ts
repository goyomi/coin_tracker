import styled from "styled-components";

export const CoinWrapper = styled.div`
  display: flex;
  gap: 5rem;
  .left_zone {
    width: 40%;
  }
  .right_zone {
    width: 60%;
  }
`;

export const Section = styled.section`
  margin-top: 1.2rem;
`;

export const Heading = styled.h3`
  font-size: 2rem;
  padding: 2rem 0;
  span:first-child {
    margin-right: 1rem;
    text-transform: uppercase;
  }
  span:nth-child(2) {
    text-transform: capitalize;
  }
`;

export const CoinDataTable = styled.table`
  width: 100%;
  margin: 1.2rem 0;
  text-align: left;
  font-size: 1.8rem;
`;

export const CoinDataTableBody = styled.tbody`
  tr:first-child th,
  tr:first-child td {
    padding-top: 0;
  }
  th,
  td {
    padding: 1.2rem 0;
    box-shadow: 0 0.15rem ${(props) => props.theme.grey1Color};
  }
  td {
    text-align: right;
  }
`;

export const CoinIntro = styled.section`
  h2 {
    margin: 3rem 0 2rem 0;
    font-size: 2rem;
  }
  p {
    margin: 1rem 0;
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
`;
