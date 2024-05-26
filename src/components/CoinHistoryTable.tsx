import styled from "styled-components";
import { ICoin } from "../contexts/Context";
import ThousandSeparator from "../utils/thousandSeparator";

export const Section = styled.section`
  margin-top: 1.2rem;
`;

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

export const CoinDataTable = styled.table`
  width: 100%;
  margin: 1.2rem 0;
  text-align: left;
  font-size: var(--font-size-web-medium);

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-medium);
  }
`;

export const CoinDataTableBody = styled.tbody`
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

function CoInHistoryTable({ selectedCoin }: { selectedCoin: ICoin }) {
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
