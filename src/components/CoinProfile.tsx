import styled from "styled-components";
import { ICoin } from "../types/type";
import ToggleColorWithValue from "../utils/colorChangeOnValue";
import ThousandSeparator from "../utils/thousandSeparator";
import { ScreenReaderOnly } from "../styles/common";

const CoinTitle = styled.div`
  margin-bottom: 1.2rem;
  & > * {
    margin-right: 1rem;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
  span {
    font-size: 2rem;
  }
  .coin_name {
    font-weight: bolder;
  }
  .coin_symbol {
    text-transform: uppercase;
  }
  .coin_rank {
    color: ${(props) => props.theme.secondFontColor};
    margin-right: 0;
  }
`;

const CoinPrice = styled.div`
  & > * {
    margin-right: 1rem;
    font-weight: bolder;
  }
  .coin_current_price {
    font-size: 3rem;
  }
  .coin_price_change_percentage {
    margin-right: 0;
    font-size: 2rem;
    display: inline-block;
    vertical-align: super;
  }
`;

interface ICoinProfileProps {
  selectedCoin: ICoin;
}

function CoinProfile({ selectedCoin }: ICoinProfileProps) {
  return (
    <section>
      <CoinTitle>
        <ScreenReaderOnly>Coin Title</ScreenReaderOnly>
        <img src={selectedCoin?.image} alt={selectedCoin?.name} />
        <span className="coin_name">{selectedCoin?.name}</span>
        <span className="coin_symbol">{selectedCoin?.symbol}</span>
        <span className="coin_rank">#{selectedCoin?.market_cap_rank}</span>
      </CoinTitle>
      <CoinPrice>
        <ScreenReaderOnly as="h3">Coin Price</ScreenReaderOnly>
        <ThousandSeparator number={selectedCoin?.current_price} />
        <ToggleColorWithValue number={Number(selectedCoin?.price_change_percentage_24h)} />
      </CoinPrice>
    </section>
  );
}

export default CoinProfile;
