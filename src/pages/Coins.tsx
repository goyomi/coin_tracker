import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../services/api";
import { ICoin } from "../types/coin";
import { A11y } from "../styles/common";
import { CoinList, CoinListHead, CoinListItem, Name } from "../styles/coins";

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);
  return (
    <>
      <A11y>Coin Tracker Table</A11y>
      <main>
        <CoinList>
          <CoinListHead>
            <tr>
              <th className="name">Name</th>
              <th className="price">Price</th>
              <th className="change">Change</th>
              <th className="volume">Volume(24h)</th>
              <th className="market_cap">Market Cap</th>
              <th className="supply">Supply</th>
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
                <td className="coin_price">USD {coin.current_price}</td>
                <td className="coin_change_percentage">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="coin_volume">USD {coin.total_volume}</td>
                <td className="coin_market_cap">USD {coin.market_cap}</td>
                <td className="coin_supply">{coin.circulating_supply}</td>
              </tr>
            ))}
          </CoinListItem>
        </CoinList>
      </main>
    </>
  );
}

export default Coins;
