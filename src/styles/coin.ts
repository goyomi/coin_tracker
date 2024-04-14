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

  @media (max-width: 768px) {
    flex-direction: column;
    .left_zone,
    .right_zone {
      width: var(--width-mobile);
    }
  }
`;

export const Section = styled.section`
  margin-top: 1.2rem;
`;

export const Heading = styled.h3`
  font-size: var(--font-size-web-large);
  padding: 2rem 0;
  span:first-child {
    margin-right: 1rem;
    text-transform: uppercase;
  }
  span:nth-child(2) {
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-large);
    padding: 1rem 0;
  }
`;

export const CoinDataTable = styled.table`
  width: 100%;
  margin: 1.2rem 0;
  text-align: left;
  font-size: var(--font-size-web-medium);

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-medium);
  }
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

  @media (max-width: 768px) {
    th,
    td {
      padding: 0.8rem 0;
    }
  }
`;

export const CoinIntro = styled.section`
  h2 {
    margin: 3rem 0 2rem 0;
    font-size: var(--font-size-web-large);
  }
  p {
    margin: 1rem 0;
    font-size: var(--font-size-web-medium);
    line-height: calc(var(--font-size-web-medium) * 1.5);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: var(--font-size-mobile-large);
      margin: 2rem 0 1.5rem 0;
    }
    p {
      font-size: var(--font-size-mobile-medium);
      line-height: calc(var(--font-size-mobile-medium) * 1.5);
    }
  }
`;
