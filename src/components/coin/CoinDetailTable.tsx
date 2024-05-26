import styled from "styled-components";
import { ScreenReaderOnly } from "../../styles/common";
import { ICoin } from "../../contexts/Context";
import ThousandSeparator from "../../utils/thousandSeparator";
import CoinProfile from "./CoinProfile";
import Converter from "./Converter";
import { ICoinIntro } from "../../pages/CoinDetail";
import { getDetailData, getHistoryData, getInfoData } from "./data";

const Section = styled.section`
  margin-top: 1.2rem;
`;

const CoinDetail = styled(Section)``;

const CoinDataTableBody = styled.tbody`
  tr:first-child th,
  tr:first-child td {
    padding-top: 0;
  }
  th,
  td {
    padding: 1.2rem 0;
    box-shadow: 0 0.15rem ${(props) => props.theme.grey1Color};
  }
  td {
    text-align: right;
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 0.8rem 0;
    }
  }
`;

const CustomTableBody = styled(CoinDataTableBody)`
  tr:first-child th,
  tr:first-child td {
    padding-top: 1.2rem;
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 0.8rem 0;
    }
  }
`;

const CoinHistory = styled(Section)``;

export const Heading = styled.h3`
  font-size: var(--font-size-web-large);
  padding: 2rem 0;
  span:first-child {
    margin-right: 1rem;
    text-transform: uppercase;
  }
  span:nth-child(2) {
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-large);
    padding: 1rem 0;
  }
`;

const CoinDataTable = styled.table`
  width: 100%;
  margin: 1.2rem 0;
  text-align: left;
  font-size: var(--font-size-web-medium);

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-medium);
  }
`;

const Separator = styled.span`
  margin: 0 0.5rem;
  &::before {
    content: "-";
  }
`;

const ItalicStyle = styled.i`
  margin-right: 1.3rem;
  font-size: var(--font-size-web-small);
  font-style: italic;
  color: ${(props) => props.theme.grey2Color};

  @media (max-width: 768px) {
    margin-right: 1rem;
    font-size: var(--font-size-mobile-small);
  }
`;

const CoinInfo = styled(Section)``;

const BoxStyle = styled.a`
  padding: 0.35rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.grey1Color};
  cursor: pointer;
`;

const Up = styled.span`
  margin-right: 1rem;
  color: ${(props) => props.theme.changeUpColor};

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`;

const Down = styled.span`
  color: ${(props) => props.theme.changeDownColor};
`;

function CoinDetailTable({ selectedCoin, coinIntro }: { selectedCoin: ICoin; coinIntro: ICoinIntro | undefined }) {
  const data = getDetailData(selectedCoin);
  const historyData = getHistoryData(selectedCoin);
  const infoData = getInfoData(coinIntro);

  return (
    <>
      <CoinProfile selectedCoin={selectedCoin} />
      <CoinDetail>
        {selectedCoin.symbol && (
          <ScreenReaderOnly>
            <span>{selectedCoin.symbol}</span>
            <span>CoinData Table</span>
          </ScreenReaderOnly>
        )}
        <CoinDataTable>
          <CustomTableBody>
            {data.map(({ title, value }) => (
              <tr key={title}>
                <th>{title}</th>
                <td>
                  <ThousandSeparator number={value} />
                </td>
              </tr>
            ))}
          </CustomTableBody>
        </CoinDataTable>
      </CoinDetail>
      <Converter selectedCoin={selectedCoin} />
      <CoinHistory>
        <Heading>
          <span>{selectedCoin?.symbol}</span>
          <span>Historical Price</span>
        </Heading>
        <CoinDataTable>
          <CoinDataTableBody>
            {historyData.map(({ title, value, value2, isItalic, date }) => (
              <tr key={title}>
                <th>{title}</th>
                <td>
                  {isItalic && <ItalicStyle>{date ? new Date(date).toLocaleDateString() : ""}</ItalicStyle>}
                  {value}
                  {value2 && <Separator />}
                  {value2}
                </td>
              </tr>
            ))}
          </CoinDataTableBody>
        </CoinDataTable>
      </CoinHistory>
      <CoinInfo>
        <Heading>
          <span>{selectedCoin?.symbol}</span>
          <span>Information</span>
        </Heading>
        <CoinDataTable>
          <CoinDataTableBody>
            {infoData.map(({ title, value, subTitle }) => (
              <tr key={title}>
                <th>{title}</th>
                <td>
                  {value !== "" ? (
                    <BoxStyle href={value} target="_blank" rel="noreferrer">
                      {subTitle ? subTitle : value?.split("/")[2]}
                    </BoxStyle>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
            <tr>
              <th>Sentiment Survey</th>
              <td>
                <Up>👍 {coinIntro?.sentiment_votes_up_percentage}%</Up>
                <Down>👎 {coinIntro?.sentiment_votes_down_percentage}%</Down>
              </td>
            </tr>
          </CoinDataTableBody>
        </CoinDataTable>
      </CoinInfo>
    </>
  );
}

export default CoinDetailTable;
