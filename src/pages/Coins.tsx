import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../services/api";
import { ICoin } from "../types/coin";
import { A11y } from "../styles/common";
import { CoinList, CoinListHead, CoinListItem, Name } from "../styles/coins";
import NumberFormatter from "../utils/numberFormatter";
import ToggleColorWithValue from "../utils/colorChangeOnValue";

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);
  return (
    <>
      <A11y>Coin Tracker Table</A11y>
      <main>
        <CoinList>
          <CoinListHead>
            <tr>
              <th className="name">
                <div>Name</div>
              </th>
              <th className="price">
                <div>Price</div>
              </th>
              <th className="change">
                <div>Change</div>
              </th>
              <th className="price_chart">
                <div>Price chart</div>
              </th>
              <th className="volume">
                <div>Volume(24h)</div>
              </th>
              <th className="market_cap">
                <div>Market Cap</div>
              </th>
              <th className="supply">
                <div>Supply</div>
              </th>
            </tr>
          </CoinListHead>
          <CoinListItem>
            {data?.map((coin) => (
              <tr key={coin.id}>
                <td>
                  <Name className="coin_name">
                    <img src={coin.image} alt={coin.name} />
                    <span>{coin.name}</span>
                    <span className="coin_symbol">{coin.symbol}</span>
                  </Name>
                </td>
                <td className="coin_price">
                  <div>USD {coin.current_price}</div>
                </td>
                <td className="coin_change_percentage">
                  <ToggleColorWithValue number={coin.price_change_percentage_24h} />
                </td>
                <td className="coin_price_chart"></td>
                <td className="coin_volume">
                  <NumberFormatter number={coin.total_volume} currencyCode="USD " />
                </td>
                <td className="coin_market_cap">
                  <NumberFormatter number={coin.market_cap} currencyCode="USD " />
                </td>
                <td className="coin_supply">
                  <NumberFormatter number={coin.circulating_supply} />
                </td>
              </tr>
            ))}
          </CoinListItem>
        </CoinList>
      </main>
    </>
  );
}

export default Coins;
