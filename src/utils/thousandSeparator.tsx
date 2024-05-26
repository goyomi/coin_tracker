import { CURRENCY_SYMBOL } from "../constant";

function ThousandSeparator({ number }: { number: number }) {
  const formattedNumber = Number(number).toLocaleString();
  const formattedDecimal = Number(number).toFixed(8).toLocaleString();
  return (
    <span className="coin_current_price">
      {CURRENCY_SYMBOL}
      {number === undefined ? "∞" : number < 1 ? formattedDecimal : formattedNumber}
    </span>
  );
}

export default ThousandSeparator;
