import styled from "styled-components";
import { CoinDataTable, Heading, Section } from "../styles/coin";
import { ICoin, ICoinIntro } from "../types/type";

interface ICoinInfoTableProps {
  selectedCoin: ICoin;
  coinIntro: ICoinIntro | undefined;
}

const BoxStyle = styled.a`
  padding: 0.35rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.grey1Color};
`;

const Up = styled.span`
  margin-right: 1rem;
  color: ${(props) => props.theme.changeUpColor};
`;

const Down = styled.span`
  color: ${(props) => props.theme.changeDownColor};
`;

function CoinInfoTable({ selectedCoin, coinIntro }: ICoinInfoTableProps) {
  return (
    <Section>
      <Heading>
        <span className="coin_symbol">{selectedCoin?.symbol}</span>
        <span>Information</span>
      </Heading>
      <CoinDataTable>
        <tbody>
          <tr>
            <th>Home Page</th>
            <td>
              {coinIntro?.links.homepage[0] ? (
                <BoxStyle href={coinIntro?.links.homepage[0]} target="_blank" rel="noreferrer">
                  {coinIntro?.links.homepage[0].split("/")[2]}
                </BoxStyle>
              ) : (
                "-"
              )}
            </td>
          </tr>
          <tr>
            <th>White Paper</th>
            <td>
              {coinIntro?.links.whitepaper ? (
                <BoxStyle href={coinIntro?.links.whitepaper} target="_blank" rel="noreferrer">
                  {coinIntro?.links.whitepaper.split("/")[2]}
                </BoxStyle>
              ) : (
                "-"
              )}
            </td>
          </tr>
          <tr>
            <th>Source Code</th>
            <td>
              {coinIntro?.links.repos_url.github[0] ? (
                <BoxStyle href={coinIntro?.links.repos_url.github[0]} target="_blank" rel="noreferrer">
                  GitHub
                </BoxStyle>
              ) : (
                "-"
              )}
            </td>
          </tr>
          <tr>
            <th>Sentiment Survey</th>
            <td>
              <Up className="up">👍 {coinIntro?.sentiment_votes_up_percentage}%</Up>
              <Down className="down">👎 {coinIntro?.sentiment_votes_down_percentage}%</Down>
            </td>
          </tr>
        </tbody>
      </CoinDataTable>
    </Section>
  );
}

export default CoinInfoTable;
