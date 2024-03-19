import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 114rem;
  margin: 6.6rem auto;
`;

export const CoinList = styled.table`
  width: 100%;
  table-layout: fixed;
  thead,
  tbody {
    border: 1px solid ${(props) => props.theme.borderColor};
  }
  thead > tr > th:first-child,
  tbody > tr > td:first-child {
    padding-left: 2.4rem;
  }
  thead > tr > th:last-child,
  tbody > tr > td:last-child {
    padding-right: 2.4rem;
  }

  .name,
  .coin_name {
    width: 28.1rem;
  }
  .price,
  .coin_price {
    width: 12.7rem;
  }
  .change,
  .coin_change_percentage {
    width: 6.9rem;
  }
  .volume,
  .coin_volume {
    width: 9rem;
  }
  .market_cap,
  .coin_market_cap {
    width: 8rem;
  }
  .supply,
  .coin_supply {
    width: 6.4rem;
  }
`;

export const CoinListHead = styled.thead`
  font-size: 1.2rem;
  tr > th {
    padding: 1.85rem 0;
  }
  /* .name {
    width: 35rem;
  }
  .price {
    width: 4.6rem;
  }
  .change {
    width: 8.5rem;
  }
  .volume {
    width: 11.6rem;
  }
  .market_cap {
    width: 9.4rem;
  }
  .supply {
    width: 5.6rem;
  } */
`;

export const CoinListItem = styled.tbody`
  font-size: 1.6rem;
  tr {
    width: 100%;
    /* display: flex;
    align-items: center;
    gap: 5.6rem; */
  }
  td {
    flex-grow: 1;
    padding: 1.4rem 0;
  }
  /* .coin_price {
    width: 12.7rem;
  }
  .coin_change_percentage {
    width: 6.9rem;
  }
  .coin_volume {
    width: 2rem;
  }
  .coin_market_cap {
    width: 8rem;
  }
  .coin_supply {
    width: 6.4rem;
  } */
`;

export const Name = styled.div`
  /* width: 28.1rem; */
  display: flex;
  align-items: center;
  gap: 1.6rem;
  img {
    width: 3.2rem;
    height: 3.2rem;
  }
  .coin_symbol {
    color: ${(props) => props.theme.thirdFontColor};
    text-transform: uppercase;
  }
`;
