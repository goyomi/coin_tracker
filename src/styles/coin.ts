import styled from "styled-components";

export const CoinWrapper = styled.div`
  display: flex;
  gap: 5rem;
`;

export const LeftZone = styled.div`
  width: 40%;
`;
export const RightZone = styled.div`
  width: 60%;
`;

export const CoinData = styled.section``;
export const CoinTitle = styled.h2`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 4rem;
    height: 4rem;
  }
  span {
    font-size: 3rem;
  }
  .coin_name {
    font-weight: bolder;
  }
  .coin_symbol {
    text-transform: uppercase;
  }
`;

export const CoinPrice = styled.div`
  & > * {
    margin-right: 1rem;
    font-size: 2.5rem;
  }
  div {
    display: inline-block;
  }
`;

export const CoinDataTable = styled.table`
  margin: 2rem 0 3rem 0;
  width: 100%;
  text-align: left;
  font-size: 2rem;
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
  font-size: 2.5rem;
  text-transform: uppercase;
  & > * {
    margin-bottom: 1rem;
  }
  .input_wrapper {
    width: 100%;
    border: 0.15rem solid ${(props) => props.theme.grey1Color};
    border-radius: 0.8rem;
  }
  .input_wrapper > input {
    width: 80%;
    padding: 1.5rem;
    font-size: 2rem;
    border: none;
  }
  .input_wrapper > span {
    padding: 2rem;
    font-size: 2rem;
    text-align: right;
    text-transform: uppercase;
    color: grey;
  }
`;

export const HistoricalPrice = styled.section`
  margin-top: 3rem;
  h2 {
    font-size: 2.5rem;
    text-transform: uppercase;
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
`;

export const CoinIntro = styled.section`
  h2 {
    margin: 3rem 0 2rem 0;
    font-size: 2.5rem;
  }
  p {
    margin: 1rem 0;
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
  .subtitle {
    margin-top: 3rem;
    background-color: #e9f6ff;
    font-size: 2rem;
    line-height: 3rem;
  }
`;
