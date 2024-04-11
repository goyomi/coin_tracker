import styled from "styled-components";
import { ICoin, ICoinIntro } from "../types/type";
import { CoinDataTable, CoinDataTableBody, Heading, Section } from "../styles/coin";

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
  const data = [
    { title: "Home Page", value: coinIntro?.links.homepage[0] },
    { title: "White Paper", value: coinIntro?.links.whitepaper },
    { title: "Source Code", value: coinIntro?.links.repos_url.github[0], subTitle: "GitHub" },
  ];
  return (
    <Section>
      <Heading>
        <span>{selectedCoin?.symbol}</span>
        <span>Information</span>
      </Heading>
      <CoinDataTable>
        <CoinDataTableBody>
          {data.map(({ title, value, subTitle }) => (
            <tr key={title}>
              <th>{title}</th>
              <td>
                {typeof value === "string" ? (
                  <BoxStyle href={value} target="_blank" rel="noreferrer">
                    {subTitle ? subTitle : value.split("/")[2]}
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
    </Section>
  );
}

export default CoinInfoTable;
