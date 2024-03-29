import styled from "styled-components";
import { IToggleNumber } from "../types/coin";
import { Link } from "react-router-dom";

export const Main = styled.main`
  margin: 5rem 0;
`;

export const NavTimebarWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

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
  .rank,
  .coin_rank {
    width: 5.05%;
  }
  .name,
  .coin_name {
    width: 23.66%;
  }
  .price,
  .coin_price {
    width: 10.24%;
  }
  .price_chart,
  .coin_price_chart {
    width: 9.31%;
  }
  .change,
  .coin_change_percentage {
    width: 6.56%;
  }
  .volume,
  .coin_volume {
    width: 8.26%;
  }
  .market_cap,
  .coin_market_cap {
    width: 7.45%;
  }
  .supply,
  .coin_supply {
    width: 5.16%;
  }
`;

export const CoinListHead = styled.thead`
  position: sticky;
  top: 9rem;
  background-color: #fff;
  font-size: 1.5rem;
  text-align: left;
  tr > th {
    padding: 2rem 0;
  }
`;

export const CoinListItem = styled.tbody`
  font-size: 1.8rem;
  tr {
    width: 100%;
    td {
      padding: 1.4rem 0;
    }
    .coin_rank {
      vertical-align: middle;
      color: ${(props) => props.theme.secondFontColor};
    }
  }
`;

export const Name = styled(Link)`
  /* display: flex;
  align-items: center;
  gap: 1.6rem; */
  & > * {
    margin-right: 1.6rem;
    vertical-align: middle;
  }
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
