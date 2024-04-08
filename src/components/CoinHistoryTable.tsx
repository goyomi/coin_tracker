import { ICoin } from "../types/type";
import styled from "styled-components";
import ThousandSeparator from "../utils/thousandSeparator";
import { CoinDataTable, Heading, Section } from "../styles/coin";

interface CoinHistoryTableProps {
  selectedCoin: ICoin;
}

const Separator = styled.span`
  margin: 0 0.5rem;
`;

const ItalicStyle = styled.i`
  margin-right: 1.3rem;
  font-size: 1.5rem;
  font-style: italic;
  color: ${(props) => props.theme.grey2Color};
`;

function CoInHistoryTable({ selectedCoin }: CoinHistoryTableProps) {
  return (
    <Section>
      <Heading>
        <span className="coin_symbol">{selectedCoin?.symbol}</span>
        <span>Historical Price</span>
      </Heading>
      <CoinDataTable>
        <tbody>
          <tr>
            <th>24h Range</th>
            <td>
              <ThousandSeparator number={selectedCoin?.low_24h} />
              <Separator className="separator">-</Separator>
              <ThousandSeparator number={selectedCoin?.high_24h} />
            </td>
          </tr>
          <tr>
            <th>All-Time High</th>
            <td>
              <ItalicStyle>
                ({selectedCoin?.ath_date ? new Date(selectedCoin?.ath_date).toLocaleDateString() : ""})
              </ItalicStyle>
              <ThousandSeparator number={selectedCoin?.ath} />
            </td>
          </tr>
          <tr>
            <th>All-Time Low</th>
            <td>
              <ItalicStyle>
                ({selectedCoin?.atl_date ? new Date(selectedCoin.atl_date).toLocaleDateString() : ""})
              </ItalicStyle>
              <ThousandSeparator number={selectedCoin?.atl} />
            </td>
          </tr>
        </tbody>
      </CoinDataTable>
    </Section>
  );
}

export default CoInHistoryTable;
