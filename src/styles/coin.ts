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

export const CoinData = styled.section`
  .coin_title {
    margin-bottom: 1.2rem;
    & > * {
      margin-right: 1rem;
    }
    img {
      width: 2rem;
      height: 2rem;
    }
    span {
      font-size: 2rem;
    }
    .coin_name {
      font-weight: bolder;
    }
    .coin_symbol {
      text-transform: uppercase;
    }
    .coin_rank {
      color: ${(props) => props.theme.secondFontColor};
      margin-right: 0;
    }
  }

  .coin_price {
    & > * {
      margin-right: 1rem;
      font-weight: bolder;
    }
    .coin_current_price {
      font-size: 3rem;
    }
    .coin_price_change_percentage {
      margin-right: 0;
      font-size: 2rem;
      display: inline-block;
      vertical-align: super;
    }
  }
`;

export const CoinDataTable = styled.table`
  width: 100%;
  margin: 1.2rem 0;
  text-align: left;
  font-size: 1.8rem;
  th,
  td {
    padding: 1.2rem 0;
    box-shadow: 0 0.15rem ${(props) => props.theme.grey1Color};
  }
  td {
    text-align: right;
  }
`;

export const CoinConvertor = styled.section`
  font-size: 2rem;
  h3 {
    padding: 2rem 0;
    .coin_symbol {
      margin-right: 1rem;
      text-transform: uppercase;
    }
    span:nth-child(2) {
      text-transform: capitalize;
    }
  }
  .input_wrapper {
    border: 0.15rem solid ${(props) => props.theme.grey1Color};
    border-radius: 0.8rem;
    input {
      width: 80%;
      padding: 1.2rem;
      font-size: 1.8rem;
      border: none;
      border-radius: 0.8rem;
    }
    span {
      padding: 2rem;
      font-size: 1.8rem;
      text-align: right;
      text-transform: uppercase;
      color: grey;
    }
  }
  .coin.input_wrapper {
    margin-bottom: 1rem;
  }
`;

export const HistoricalPrice = styled.section`
  margin-top: 1.2rem;
  font-size: 2rem;
  h3 {
    padding: 2rem 0;
    .coin_symbol {
      margin-right: 1rem;
      text-transform: uppercase;
    }
    span:nth-child(2) {
      text-transform: capitalize;
    }
  }
`;

export const HistoricalPriceTable = styled(CoinDataTable)`
  .separator {
    margin: 0 0.5rem;
  }
  tbody tr td i {
    margin-right: 1.3rem;
    font-size: 1.5rem;
    font-style: italic;
    color: ${(props) => props.theme.grey2Color};
  }
  tbody tr:first-child th,
  tbody tr:first-child td {
    padding-top: 0;
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