import React, { useContext, useState } from "react";
import { CoinDataContext } from "../contexts/CoinDataContext";
import { useParams } from "react-router-dom";
import {
  CoinConvertor,
  CoinData,
  CoinDataTable,
  CoinIntro,
  CoinPrice,
  CoinTitle,
  CoinWrapper,
  HistoricalPrice,
  HistoricalPriceTable,
  LeftZone,
  RightZone,
} from "../styles/coin";
import { A11y } from "../styles/common";
import ToggleColorWithValue from "../utils/colorChangeOnValue";
import { ICoinIntro, IParams } from "../types/coin";
import ThousandSeparator from "../utils/thousandSeparator";
import Chart from "../components/Chart";
import { useQuery } from "@tanstack/react-query";
import { introCoin } from "../services/api";
import parse from "html-react-parser";

function Coin() {
  const coinData = useContext(CoinDataContext);
  const { coinId } = useParams<IParams>();
  const selectedCoin = coinData?.find((coin) => coin.id === coinId);
  const [inputOne, setInputOne] = useState<number | "">(0);
  const [inputTwo, setInputTwo] = useState<number | "">(0);

  const { data: coinIntro } = useQuery<ICoinIntro>(
    ["intro", coinId],
    () => introCoin(coinId),
    { staleTime: Infinity }
  );

  const textLine = coinIntro?.description.en.split("\r\n");

  const handleInputOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    const price = selectedCoin?.current_price || 1;
    setInputOne(value);
    setInputTwo(value * price);
  };

  const handleInputTwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    const price = selectedCoin?.current_price || 1;
    setInputTwo(value);
    setInputOne(value / price);
  };

  const handleInputOneFocus = () => {
    setInputOne("");
  };

  const handleInputTwoFocus = () => {
    setInputTwo("");
  };

  return (
    <CoinWrapper>
      <A11y>Coin detail page</A11y>
      <LeftZone>
        {selectedCoin ? (
          <CoinData key={selectedCoin.id}>
            <CoinTitle>
              <img src={selectedCoin.image} alt={selectedCoin.name} />
              <span className="coin_name">{selectedCoin.name}</span>
              <span className="coin_symbol">{selectedCoin.symbol}</span>
              <span className="coin_rank">
                # {selectedCoin.market_cap_rank}
              </span>
            </CoinTitle>
            <CoinPrice>
              <span>US $</span>
              <ThousandSeparator number={selectedCoin.current_price} />
              <ToggleColorWithValue
                number={selectedCoin.price_change_percentage_24h}
              />
            </CoinPrice>
            <CoinDataTable>
              <tbody>
                <tr>
                  <th>Market Cap</th>
                  <td>
                    <ThousandSeparator number={selectedCoin.market_cap} />
                  </td>
                </tr>
                <tr>
                  <th>Fully Diluted Valuation</th>
                  <td>
                    <ThousandSeparator
                      number={selectedCoin.fully_diluted_valuation}
                    />
                  </td>
                </tr>
                <tr>
                  <th>24 Hour Trading Vol</th>
                  <td>
                    <ThousandSeparator number={selectedCoin.total_volume} />
                  </td>
                </tr>
                <tr>
                  <th>Circulating Supply</th>
                  <td>
                    <ThousandSeparator
                      number={selectedCoin.circulating_supply}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Total Supply</th>
                  <td>
                    <ThousandSeparator number={selectedCoin.total_supply} />
                  </td>
                </tr>
                <tr>
                  <th>Max Supply</th>
                  <td>
                    <ThousandSeparator number={selectedCoin.max_supply} />
                  </td>
                </tr>
              </tbody>
            </CoinDataTable>
          </CoinData>
        ) : null}
        <CoinConvertor>
          <h4>{selectedCoin?.symbol} Converter</h4>
          <div className="input_wrapper">
            <input
              type="number"
              value={inputOne}
              onChange={handleInputOneChange}
              onFocus={handleInputOneFocus}
            />
            <span>{selectedCoin?.symbol}</span>
          </div>
          <div className="input_wrapper">
            <input
              type="number"
              value={inputTwo}
              onChange={handleInputTwoChange}
              onFocus={handleInputTwoFocus}
            />
            <span>USD</span>
          </div>
        </CoinConvertor>
        <HistoricalPrice>
          <h2>{selectedCoin?.symbol} Historical Price</h2>
          <HistoricalPriceTable>
            <tbody>
              <tr>
                <th>24h Range</th>
                <td>
                  <ThousandSeparator number={selectedCoin?.low_24h} />
                  <span className="separator">-</span>
                  <ThousandSeparator number={selectedCoin?.high_24h} />
                </td>
              </tr>
              <tr>
                <th>All-Time High</th>
                <td>
                  <i>
                    (
                    {selectedCoin?.ath_date
                      ? new Date(selectedCoin?.ath_date).toLocaleDateString()
                      : ""}
                    )
                  </i>
                  <ThousandSeparator number={selectedCoin?.ath} />
                </td>
              </tr>
              <tr>
                <th>All-Time Low</th>
                <td>
                  <i>
                    (
                    {selectedCoin?.atl_date
                      ? new Date(selectedCoin.atl_date).toLocaleDateString()
                      : ""}
                    )
                  </i>
                  <ThousandSeparator number={selectedCoin?.atl} />
                </td>
              </tr>
            </tbody>
          </HistoricalPriceTable>
        </HistoricalPrice>
      </LeftZone>
      <RightZone>
        <Chart selectedCoin={selectedCoin} />
        <CoinIntro>
          <h2>About</h2>
          {textLine?.map((text: string, idx: number) => (
            <React.Fragment key={idx}>{parse(`<p>${text}</p>`)}</React.Fragment>
          ))}
        </CoinIntro>
      </RightZone>
    </CoinWrapper>
  );
}

export default Coin;
