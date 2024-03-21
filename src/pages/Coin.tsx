import React, { useContext, useState } from "react";
import { CoinDataContext } from "../contexts/CoinDataContext";
import { useParams } from "react-router-dom";
import {
  CoinConvertor,
  CoinData,
  CoinDataTable,
  CoinPrice,
  CoinTitle,
  CoinWrapper,
} from "../styles/coin";
import { A11y } from "../styles/common";
import ToggleColorWithValue from "../utils/colorChangeOnValue";
import { IParams } from "../types/coin";
import ThousandSeparator from "../utils/thousandSeparator";

function Coin() {
  const coinData = useContext(CoinDataContext);
  const { coinId } = useParams<IParams>();
  const selectedCoin = coinData?.find((coin) => coin.id === coinId);
  const [inputOne, setInputOne] = useState<number | "">(0);
  const [inputTwo, setInputTwo] = useState<number | "">(0);

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
      <A11y>코인 상세 페이지</A11y>
      {selectedCoin ? (
        <CoinData key={selectedCoin.id}>
          <CoinTitle>
            <img src={selectedCoin.image} alt={selectedCoin.name} />
            <span className="coin_name">{selectedCoin.name}</span>
            <span className="coin_symbol">{selectedCoin.symbol}</span>
            <span className="coin_rank"># {selectedCoin.market_cap_rank}</span>
          </CoinTitle>
          <CoinPrice>
            <span>US $</span>
            <ThousandSeparator number={selectedCoin.current_price} />
            <ToggleColorWithValue number={selectedCoin.price_change_percentage_24h} />
          </CoinPrice>
          <CoinDataTable>
            <tbody>
              <tr>
                <th>시가총액</th>
                <td>
                  <ThousandSeparator number={selectedCoin.market_cap} />
                </td>
              </tr>
              <tr>
                <th>완전 희석 가치(FDV)</th>
                <td>
                  <ThousandSeparator number={selectedCoin.fully_diluted_valuation} />
                </td>
              </tr>
              <tr>
                <th>24시간 거래대금</th>
                <td>
                  <ThousandSeparator number={selectedCoin.total_volume} />
                </td>
              </tr>
              <tr>
                <th>유통량</th>
                <td>
                  <ThousandSeparator number={selectedCoin.circulating_supply} />
                </td>
              </tr>
              <tr>
                <th>총 공급량</th>
                <td>
                  <ThousandSeparator number={selectedCoin.total_supply} />
                </td>
              </tr>
              <tr>
                <th>최대 공급량</th>
                <td>
                  <ThousandSeparator number={selectedCoin.max_supply} />
                </td>
              </tr>
            </tbody>
          </CoinDataTable>
          <CoinConvertor>
            <h4>{selectedCoin.symbol} 환전기</h4>
            <div className="input_wrapper">
              <input
                type="number"
                value={inputOne}
                onChange={handleInputOneChange}
                onFocus={handleInputOneFocus}
              />
              <span>{selectedCoin.symbol}</span>
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
        </CoinData>
      ) : null}
      <section>
        <button>Chart</button>
        <button>소개</button>
      </section>
    </CoinWrapper>
  );
}

export default Coin;
