import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../services/api";
import { ICoin } from "../types/coin";
import { A11y } from "../styles/common";
import { Main } from "../styles/layout";

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);
  return (
    <>
      <A11y>Coin Tracker Table</A11y>
      <Main>
        <table>
          <thead>
            <tr>
              <th colSpan={3}>Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>Volume</th>
              <th>Market Cap</th>
              <th>Supply</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((coin) => (
              <tr key={coin.id}>
                <td>
                  <img src={coin.image} alt={coin.name} />
                </td>
                <td>{coin.name}</td>
                <td>{coin.symbol}</td>
                <td>{coin.current_price}</td>
                <td>{coin.price_change_24h}</td>
                <td>{coin.total_volume}</td>
                <td>{coin.market_cap}</td>
                <td>{coin.circulating_supply}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Main>
    </>
  );
}

export default Coins;
