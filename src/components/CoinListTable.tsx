import { useContext } from "react";
import styled from "styled-components";
import { CoinDataContext, TimeContext } from "../contexts/CoinDataContext";
import { ICoin, IToggleNumber } from "../types/type";
import { Link } from "react-router-dom";
import ToggleColorWithValue from "../utils/colorChangeOnValue";
import NumberFormatter from "../utils/numberFormatter";
import { CURRENCY } from "../constant";

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
  background-color: ${(props) => props.theme.backgroundColor};
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
    .coin_price > div span:first-child,
    .coin_volume > div span:first-child,
    .coin_market_cap > div span:first-child {
      margin-right: 0.5rem;
    }
  }
`;

export const Name = styled(Link)`
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

function CoinListTable() {
  const { data } = useContext(CoinDataContext);
  const { time } = useContext(TimeContext);
  const key = `price_change_percentage_${time}_in_currency` as keyof ICoin;

  return (
    <CoinList>
      <CoinListHead>
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
      </CoinListHead>
      <CoinListItem>
        {Array.isArray(data) &&
          data.map((coin) => (
            <tr key={coin.id}>
              <td className="coin_rank">
                <span>{coin.market_cap_rank}</span>
              </td>
              <td>
                <Name to={`/${coin.id}`} className="coin_name">
                  <img src={coin.image} alt={coin.name} />
                  <span className="coin_name">{coin.name}</span>
                  <span className="coin_symbol">{coin.symbol}</span>
                </Name>
              </td>
              <td className="coin_price">
                <div>
                  <span>{CURRENCY}</span>
                  <span>{0 < coin.current_price ? coin.current_price.toFixed(2) : coin.current_price}</span>
                </div>
              </td>
              <td className="coin_change_percentage">
                <ToggleColorWithValue number={Number(coin[key])} />
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
      </CoinListItem>
    </CoinList>
  );
}

export default CoinListTable;
