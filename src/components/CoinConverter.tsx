import { useState } from "react";
import styled from "styled-components";
import { ICoin } from "../types/type";
import { ScreenReaderOnly } from "../styles/common";
import { CURRENCY } from "../constant";

const Section = styled.section`
  font-size: 2rem;
`;

const Heading = styled.h3`
  padding: 2rem 0;
  span:first-child {
    margin-right: 1rem;
    text-transform: uppercase;
  }
  span:nth-child(2) {
    text-transform: capitalize;
  }
`;

const InputWrapper = styled.div`
  border: 0.15rem solid ${(props) => props.theme.grey1Color};
  border-radius: 0.8rem;
  padding: 1.2rem 2rem;
  input {
    width: 80%;
    font-size: 1.8rem;
    border: none;
    border-radius: 0.8rem;
    color: ${(props) => props.theme.mainFontColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
  span {
    width: 20%;
    display: inline-block;
    margin-left: auto;
    font-size: 1.8rem;
    text-align: right;
    text-transform: uppercase;
    color: grey;
  }
`;

const CoinInputWrapper = styled(InputWrapper)`
  margin-bottom: 1rem;
`;

interface ICoinConverterProps {
  selectedCoin: ICoin;
}

function CoinConverter({ selectedCoin }: ICoinConverterProps) {
  const [inputOne, setInputOne] = useState<number | "">(0);
  const [inputTwo, setInputTwo] = useState<number | "">(0);
  const price = selectedCoin?.current_price || 1;

  const handleInputOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setInputOne(value);
    setInputTwo(value * price);
  };

  const handleInputTwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
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
    <Section>
      <Heading>
        <span>{selectedCoin?.symbol}</span>
        <span>Converter</span>
      </Heading>
      <CoinInputWrapper>
        <ScreenReaderOnly as="label" htmlFor="inputOne">
          {selectedCoin?.symbol} Amount
        </ScreenReaderOnly>
        <input type="number" value={inputOne} onChange={handleInputOneChange} onFocus={handleInputOneFocus} />
        <span>{selectedCoin?.symbol}</span>
      </CoinInputWrapper>
      <InputWrapper>
        <ScreenReaderOnly as="label" htmlFor="inputOne">
          {CURRENCY} Amount
        </ScreenReaderOnly>
        <input type="number" value={inputTwo} onChange={handleInputTwoChange} onFocus={handleInputTwoFocus} />
        <span>{CURRENCY}</span>
      </InputWrapper>
    </Section>
  );
}

export default CoinConverter;
