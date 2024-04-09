import styled from "styled-components";
import { CoinDataTable, CoinDataTableBody, Section } from "../styles/coin";
import { ScreenReaderOnly } from "../styles/common";
import { ICoin } from "../types/type";
import ThousandSeparator from "../utils/thousandSeparator";

const CustomTableBody = styled(CoinDataTableBody)`
  tr:first-child th,
  tr:first-child td {
    padding-top: 1.2rem;
  }
`;
interface ICoinInfoProps {
  selectedCoin: ICoin;
}

function CoinDetailTable({ selectedCoin }: ICoinInfoProps) {
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
      <ScreenReaderOnly>
        {selectedCoin.symbol && <span className="coin_symbol">{selectedCoin.symbol}</span>}
        <span>CoinData Table</span>
      </ScreenReaderOnly>
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
