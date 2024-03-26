import { IThousandSeparator } from "../types/coin";

function ThousandSeparator({ number }: IThousandSeparator) {
  const formattedNumber = Number(number).toLocaleString();
  const formattedDecimal = Number(number).toFixed(8).toLocaleString();
  return (
    <span>
      {number === undefined
        ? "∞"
        : number < 1
        ? formattedDecimal
        : formattedNumber}
    </span>
  );
}

export default ThousandSeparator;
