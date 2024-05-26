import { useState } from "react";
import styled from "styled-components";
import { ICoin } from "../contexts/Context";
import { ScreenReaderOnly } from "../styles/common";
import { CURRENCY } from "../constant";
import { Heading } from "./CoinDetailTable";

const Section = styled.section`
  font-size: var(--font-size-web-large);

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-large);
  }
`;

const InputWrapper = styled.div
  .withConfig({ shouldForwardProp: (prop) => !["marginBottom"].includes(prop) })
  .attrs((props) => ({}))<{ marginBottom: boolean }>`
  border: 0.15rem solid ${(props) => props.theme.grey1Color};
  border-radius: 0.8rem;
  padding: 1.2rem 2rem;
  margin-bottom: ${(props) => (props.marginBottom ? "1rem" : "0")};

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    margin-bottom: ${(props) => (props.marginBottom ? "0.5rem" : "0")}; // 마진 조정
  }
`;

const InputInner = styled.input`
  width: 80%;
  font-size: var(--font-size-web-medium);
  border: none;
  border-radius: 0.8rem;
  color: ${(props) => props.theme.mainFontColor};
  background-color: ${(props) => props.theme.backgroundColor};

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-medium);
  }
`;

const Unit = styled.span`
  width: 20%;
  display: inline-block;
  margin-left: auto;
  font-size: var(--font-size-web-medium);
  text-align: right;
  text-transform: uppercase;
  color: grey;

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-medium);
  }
`;

function Converter({ selectedCoin }: { selectedCoin: ICoin }) {
  const [inputValue, setInputValue] = useState<{ coinAmount: number | ""; currencyAmount: number | "" }>({
    coinAmount: 0,
    currencyAmount: 0,
  });
  const price = selectedCoin?.current_price || 1;

  const COIN_AMOUNT = "coinAmount";
  const CURRENCY_AMOUNT = "currencyAmount";
  const handleInputChange = (name: string, value: number | string) => {
    const numberValue = typeof value === "number" ? value : Number(value);
    name === COIN_AMOUNT
      ? setInputValue(() => ({ coinAmount: numberValue, currencyAmount: numberValue * price }))
      : setInputValue(() => ({ coinAmount: numberValue / price, currencyAmount: numberValue }));
  };

  const handleInputFocus = (name: string) => {
    name === COIN_AMOUNT
      ? setInputValue((prev) => ({ ...prev, coinAmount: "" }))
      : setInputValue((prev) => ({ ...prev, currencyAmount: "" }));
  };

  const data = [
    {
      title: selectedCoin?.symbol,
      value: selectedCoin?.symbol,
      input: (
        <InputInner
          id={COIN_AMOUNT}
          type="number"
          value={inputValue.coinAmount}
          onChange={(event) => {
            const value = Number(event.target.value);
            handleInputChange(COIN_AMOUNT, value);
          }}
          onFocus={() => handleInputFocus(COIN_AMOUNT)}
        />
      ),
    },
    {
      title: CURRENCY,
      value: CURRENCY,
      input: (
        <InputInner
          id={CURRENCY_AMOUNT}
          type="number"
          value={inputValue.currencyAmount}
          onChange={(event) => {
            const value = Number(event.target.value);
            handleInputChange(CURRENCY_AMOUNT, value);
          }}
          onFocus={() => handleInputFocus(CURRENCY_AMOUNT)}
        />
      ),
    },
  ];

  return (
    <Section>
      <Heading>
        <span>{selectedCoin?.symbol}</span>
        <span>Converter</span>
      </Heading>
      {data.map(({ title, value, input }, index) => (
        <InputWrapper key={index} marginBottom={true}>
          <ScreenReaderOnly as="label" htmlFor={title === selectedCoin?.symbol ? COIN_AMOUNT : CURRENCY_AMOUNT}>
            {title} Amount
          </ScreenReaderOnly>
          {input}
          <Unit>{value}</Unit>
        </InputWrapper>
      ))}
    </Section>
  );
}

export default Converter;
