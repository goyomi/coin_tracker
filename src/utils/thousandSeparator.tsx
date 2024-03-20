import { IThousandSeparator } from "../types/coin";

function ThousandSeparator({ number }: IThousandSeparator) {
  return <span>{number?.toLocaleString() ?? "∞"}</span>;
}

export default ThousandSeparator;
