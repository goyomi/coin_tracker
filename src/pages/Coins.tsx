import { A11y } from "../styles/common";
import {
  CoinList,
  CoinListHead,
  CoinListItem,
  Name,
  NavTimebarWrapper,
} from "../styles/coins";
import NumberFormatter from "../utils/numberFormatter";
import ToggleColorWithValue from "../utils/colorChangeOnValue";
import Header from "../components/Header";
import { useContext } from "react";
import { CoinDataContext } from "../contexts/CoinDataContext";
import Loading from "../components/Loading";
import Timebar from "../components/Timebar";
import Breadcrumb from "../components/Breadcrumb";

function Coins({ setTime }: { setTime: Function }) {
  const { data, isLoading } = useContext(CoinDataContext);
  const times = {
    "1h": "1H",
    "24h": "24H",
    "7d": "1W",
    "30d": "1M",
    "365d": "1Y",
  };
  const links = [{ name: "Coins Currency", path: "/" }];
  console.log(isLoading);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <A11y>Coin Tracker Table</A11y>
          <NavTimebarWrapper>
            <Breadcrumb links={links} />
            <Timebar times={times} setTime={setTime} />
          </NavTimebarWrapper>
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
                      <Name to={`/${coin.id}`} className="coin_name">
                        <img src={coin.image} alt={coin.name} />
                        <span>{coin.name}</span>
                        <span className="coin_symbol">{coin.symbol}</span>
                      </Name>
                    </td>
                    <td className="coin_price">
                      <div>
                        USD{" "}
                        {0 < coin.current_price
                          ? coin.current_price.toFixed(2)
                          : coin.current_price}
                      </div>
                    </td>
                    <td className="coin_change_percentage">
                      <ToggleColorWithValue
                        number={coin.price_change_percentage_24h}
                      />
                    </td>
                    <td className="coin_price_chart"></td>
                    <td className="coin_volume">
                      <NumberFormatter
                        number={coin.total_volume}
                        currencyCode="USD "
                      />
                    </td>
                    <td className="coin_market_cap">
                      <NumberFormatter
                        number={coin.market_cap}
                        currencyCode="USD "
                      />
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
      )}
    </>
  );
}

export default Coins;
