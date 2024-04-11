import { useState } from "react";
import styled from "styled-components";
import { ICoin } from "../types/type";
import { ScreenReaderOnly } from "../styles/common";
import { CURRENCY } from "../constant";
import { Heading } from "../styles/coin";

const Section = styled.section`
  font-size: 2rem;
`;

const InputWrapper = styled.div<{ marginBottom: boolean }>`
  border: 0.15rem solid ${(props) => props.theme.grey1Color};
  border-radius: 0.8rem;
  padding: 1.2rem 2rem;
  margin-bottom: ${(props) => (props.marginBottom ? "1rem" : "")};
`;

const InputInner = styled.input`
  width: 80%;
  font-size: 1.8rem;
  border: none;
  border-radius: 0.8rem;
  color: ${(props) => props.theme.mainFontColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Unit = styled.span`
  width: 20%;
  display: inline-block;
  margin-left: auto;
  font-size: 1.8rem;
  text-align: right;
  text-transform: uppercase;
  color: grey;
`;

interface ICoinConverterProps {
  selectedCoin: ICoin;
}

interface IInputValueState {
  coinAmount: number | "";
  currencyAmount: number | "";
}

function CoinConverter({ selectedCoin }: ICoinConverterProps) {
  const [inputValue, setInputValue] = useState<IInputValueState>({
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

export default CoinConverter;
