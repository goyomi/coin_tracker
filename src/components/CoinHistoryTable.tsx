import styled from "styled-components";
import { ICoin } from "../types/type";
import ThousandSeparator from "../utils/thousandSeparator";
import { CoinDataTable, CoinDataTableBody, Heading, Section } from "../styles/coin";

const Separator = styled.span`
  margin: 0 0.5rem;
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

interface CoinHistoryTableProps {
  selectedCoin: ICoin;
}

function CoInHistoryTable({ selectedCoin }: CoinHistoryTableProps) {
  const data = [
    {
      title: "24h Range",
      value: (
        <>
          <ThousandSeparator number={selectedCoin?.low_24h} />
          <Separator>-</Separator>
          <ThousandSeparator number={selectedCoin?.high_24h} />
        </>
      ),
    },
    {
      title: "All-Time High",
      value: <ThousandSeparator number={selectedCoin?.ath} />,
      isItalic: true,
      date: selectedCoin?.ath_date,
    },
    {
      title: "All-Time Low",
      value: <ThousandSeparator number={selectedCoin?.atl} />,
      isItalic: true,
      date: selectedCoin?.atl_date,
    },
  ];

  return (
    <Section>
      <Heading>
        <span>{selectedCoin?.symbol}</span>
        <span>Historical Price</span>
      </Heading>
      <CoinDataTable>
        <CoinDataTableBody>
          {data.map(({ title, value, isItalic, date }) => (
            <tr key={title}>
              <th>{title}</th>
              <td>
                {isItalic && <ItalicStyle>{date ? new Date(date).toLocaleDateString() : ""}</ItalicStyle>}
                {value}
              </td>
            </tr>
          ))}
        </CoinDataTableBody>
      </CoinDataTable>
    </Section>
  );
}

export default CoInHistoryTable;
