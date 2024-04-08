import { CoinDataTable, Heading, Section } from "../styles/coin";
import { ScreenReaderOnly } from "../styles/common";
import ThousandSeparator from "../utils/thousandSeparator";

interface ICoinInfoProps {
  hidden?: boolean;
  title: string;
  symbol?: string | undefined;
  data: { title: string; value: number | string }[];
  children?: React.ReactNode;
}

function CoinDetailTable({ hidden, title, symbol, data }: ICoinInfoProps) {
  const CustomHeading = hidden ? ScreenReaderOnly : Heading;

  return (
    <Section>
      <CustomHeading>
        {symbol && <span className="coin_symbol">{symbol}</span>}
        <span>{title}</span>
      </CustomHeading>
      <CoinDataTable>
        <tbody>
          {data.map((selectedCoin, index) => (
            <tr key={index}>
              <th>{selectedCoin.title}</th>
              <td>
                <ThousandSeparator number={Number(selectedCoin.value)} />
              </td>
            </tr>
          ))}
        </tbody>
      </CoinDataTable>
    </Section>
  );
}

export default CoinDetailTable;
