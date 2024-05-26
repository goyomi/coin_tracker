import styled from "styled-components";
import { ScreenReaderOnly } from "../styles/common";
import { ICoin } from "../contexts/Context";
import ThousandSeparator from "../utils/thousandSeparator";
import { CoinDataTable, CoinDataTableBody, Section } from "./CoinHistoryTable";

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

function CoinDetailTable({ selectedCoin }: { selectedCoin: ICoin }) {
  const data = [
    { title: "Market Cap", value: selectedCoin.market_cap },
    { title: "Fully Diluted Valuation", value: selectedCoin?.fully_diluted_valuation },
    { title: "24 Hour Trading Vol", value: selectedCoin.total_volume },
    { title: "Circulating Supply", value: selectedCoin.circulating_supply },
    { title: "Total Supply", value: selectedCoin.total_supply },
    { title: "Max Supply", value: selectedCoin.max_supply },
  ];

  return (
    <Section>
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
                <ThousandSeparator number={Number(value)} />
              </td>
            </tr>
          ))}
        </CustomTableBody>
      </CoinDataTable>
    </Section>
  );
}

export default CoinDetailTable;
