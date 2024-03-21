import styled from "styled-components";

export const CoinWrapper = styled.div`
  display: flex;
  gap: 10rem;
`;

export const CoinData = styled.section`
  width: 40%;
`;

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
    box-shadow: 0 0.15rem ${(props) => props.theme.borderColor};
  }
  td {
    text-align: right;
  }
`;

export const CoinConvertor = styled.div`
  font-size: 2.5rem;
  text-transform: uppercase;
  & > * {
    margin-bottom: 1rem;
  }
  .input_wrapper {
    width: 100%;
    border: 0.1rem solid ${(props) => props.theme.borderColor};
    border-radius: 0.5rem;
  }
  .input_wrapper > input {
    width: 80%;
    padding: 2rem;
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
