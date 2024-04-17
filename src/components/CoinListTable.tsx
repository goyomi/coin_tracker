import { useContext } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { CoinDataContext } from "../contexts/CoinDataContext";
import ToggleColorWithValue from "../utils/colorChangeOnValue";
import NumberFormatter from "../utils/numberFormatter";
import { IToggleNumber } from "../types/type";
import { CURRENCY } from "../constant";

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  /* common */
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

  th,
  td {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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

  @media (max-width: 1024px) {
    thead > tr > th:first-child,
    tbody > tr > td:first-child {
      padding-left: 2rem;
    }
    .change,
    .coin_change_percentage {
      padding-right: 2rem;
    }
  }

  @media (max-width: 768px) {
    thead > tr > th:first-child,
    tbody > tr > td:first-child {
      padding-left: 1.6rem;
    }
    .change,
    .coin_change_percentage {
      padding-right: 1.6rem;
    }

    .market_cap,
    .coin_market_cap,
    .supply,
    .coin_supply,
    .volume,
    .coin_volume {
      display: none;
    }

    .rank,
    .coin_rank {
      width: 10.05%;
    }
    .name,
    .coin_name {
      width: 40.66%;
    }
    .price,
    .coin_price {
      width: 24.24%;
    }
    .change,
    .coin_change_percentage {
      width: 15.45%;
    }
  }
`;

export const TableHeader = styled.thead`
  position: sticky;
  top: 9rem;
  background-color: ${(props) => props.theme.backgroundColor};
  font-size: var(--font-size-web-small);
  text-align: left;
  tr > th {
    padding: 2rem 0;
  }

  @media (max-width: 1024px) {
    top: 7rem;
    font-size: var(--font-size-tablet-small);
  }

  @media (max-width: 768px) {
    top: 5rem;
    font-size: var(--font-size-mobile-small);
    tr > th {
      padding: 1.5rem 0;
    }
  }
`;

export const TableBody = styled.tbody`
  font-size: var(--font-size-web-medium);
  tr {
    width: 100%;
    td {
      padding: 1.4rem 0;
      vertical-align: middle;
    }
    .coin_rank {
      color: ${(props) => props.theme.secondFontColor};
    }
    .coin_price > div span:first-child,
    .coin_volume > div span:first-child,
    .coin_market_cap > div span:first-child {
      margin-right: 0.5rem;
    }
  }
  @media (max-width: 1024px) {
    font-size: var(--font-size-tablet-medium);
    tr > td {
      padding: 1.2rem 0;
    }
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-medium);
    tr > td {
      padding: 1rem 0;
    }
  }
`;

export const CoinLink = styled(Link)`
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

  @media (max-width: 1024px) {
    & > * {
      margin-right: 1.2rem;
    }
    img {
      width: 2.6rem;
      height: 2.6rem;
    }
  }

  @media (max-width: 768px) {
    & > * {
      margin-right: 0.8rem;
    }
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const ToggleColor = styled.div<IToggleNumber>`
  color: ${(props) => props.theme[props.color || "mainFontColor"]};
`;

function CoinListTable() {
  const { data } = useContext(CoinDataContext);

  return (
    <Table>
      <TableHeader>
        <tr>
          <th className="rank">
            <span>#</span>
          </th>
          <th className="name">
            <span>Name</span>
          </th>
          <th className="price">
            <span>Price</span>
          </th>
          <th className="change">
            <span>Change</span>
          </th>
          <th className="volume">
            <span>24h Volume</span>
          </th>
          <th className="market_cap">
            <span>Market Cap</span>
          </th>
          <th className="supply">
            <span>Supply</span>
          </th>
        </tr>
      </TableHeader>
      <TableBody>
        {Array.isArray(data) &&
          data.map((coin) => (
            <tr key={coin.id}>
              <td className="coin_rank">
                <span>{coin.market_cap_rank}</span>
              </td>
              <td>
                <CoinLink to={`/${coin.id}`} className="coin_name">
                  <img src={coin.image} alt={coin.name} />
                  <span className="coin_name">{coin.name}</span>
                  <span className="coin_symbol">{coin.symbol}</span>
                </CoinLink>
              </td>
              <td className="coin_price">
                <div>
                  <span>{CURRENCY}</span>
                  <span>{0 < coin.current_price ? coin.current_price.toFixed(2) : coin.current_price}</span>
                </div>
              </td>
              <td className="coin_change_percentage">
                <ToggleColorWithValue number={coin.market_cap_change_percentage_24h} />
              </td>
              <td className="coin_volume">
                <NumberFormatter number={coin.total_volume} currencyCode={CURRENCY} />
              </td>
              <td className="coin_market_cap">
                <NumberFormatter number={coin.market_cap} currencyCode={CURRENCY} />
              </td>
              <td className="coin_supply">
                <NumberFormatter number={coin.circulating_supply} />
              </td>
            </tr>
          ))}
      </TableBody>
    </Table>
  );
}

export default CoinListTable;
