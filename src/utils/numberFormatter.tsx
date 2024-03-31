import { IFormateNumber } from "../types/type";

function NumberFormatter({ number, currencyCode }: IFormateNumber) {
  let formattedNumber;

  if (Math.abs(number) >= 1000_000_000_000) {
    formattedNumber = `${(number / 1_000_000_000_000).toFixed(1)}T`;
  } else if (Math.abs(number) >= 1_000_000_000) {
    formattedNumber = `${(number / 1_000_000_000).toFixed(1)}B`;
  } else if (Math.abs(number) >= 1_000_000) {
    formattedNumber = `${(number / 1_000_000).toFixed(1)}M`;
  } else if (Math.abs(number) >= 1_000) {
    formattedNumber = `${(number / 1_000).toFixed(1)}K`;
  } else {
    formattedNumber = number;
  }

  return (
    <div>
      {currencyCode}
      {formattedNumber}
    </div>
  );
}

export default NumberFormatter;
