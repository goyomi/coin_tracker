import styled from "styled-components";
import { IToggleNumber } from "../types/coin";
import { Link } from "react-router-dom";

export const CoinList = styled.table`
  width: 100%;
  table-layout: fixed;
  thead,
  tbody {
    border: 1px solid ${(props) => props.theme.grey1Color};
  }
  thead > tr > th:first-child,
  tbody > tr > td:first-child {
    padding-left: 2.4rem;
  }
  thead > tr > th:last-child,
  tbody > tr > td:last-child {
    padding-right: 2.4rem;
  }
  thead > tr > th > div,
  tbody > tr > td > div {
    margin-right: 3.5rem;
  }
  thead > tr > th > div:last-child,
  tbody > tr > td > div:last-child {
    margin-right: 0;
  }
  .name,
  .coin_name {
    width: 28.1rem;
  }
  .price,
  .coin_price {
    width: 12.7rem;
  }
  .price_chart,
  .coin_price_chart {
    width: 10.3rem;
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
`;

export const CoinListItem = styled.tbody`
  font-size: 1.6rem;
  tr {
    width: 100%;
  }
  td {
    padding: 1.4rem 0;
  }
`;

export const Name = styled(Link)`
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

export const ToggleColor = styled.div<IToggleNumber>`
  color: ${(props) => props.theme[props.color || "mainFontColor"]};
`;
