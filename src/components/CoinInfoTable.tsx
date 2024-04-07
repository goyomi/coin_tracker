import styled from "styled-components";
import { ScreenReaderOnly } from "../styles/common";
import ThousandSeparator from "../utils/thousandSeparator";

const CoinDataTable = styled.table`
  width: 100%;
  margin: 1.2rem 0;
  text-align: left;
  font-size: 1.8rem;
  th,
  td {
    padding: 1.2rem 0;
    box-shadow: 0 0.15rem ${(props) => props.theme.grey1Color};
  }
  td {
    text-align: right;
  }
`;

interface ICoinInfoProps {
  hidden?: boolean;
  title: string;
  symbol?: string | undefined;
  data: { label: string; value: number | undefined }[];
}

function CoinInfoTable({ hidden, title, symbol, data }: ICoinInfoProps) {
  const Heading = hidden ? ScreenReaderOnly : "h3";

  return (
    <section>
      <Heading>
        {symbol && <span className="coin_symbol">{symbol}</span>}
        <span>{title}</span>
      </Heading>
      <CoinDataTable>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <th>{row.label}</th>
              <td>
                <ThousandSeparator number={row.value} />
              </td>
            </tr>
          ))}
        </tbody>
      </CoinDataTable>
    </section>
  );
}

export default CoinInfoTable;
