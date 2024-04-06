import { ToggleColor } from "../components/CoinListTable";
import { IToggleNumber } from "../types/type";

function ToggleColorWithValue({ number }: IToggleNumber) {
  const color = Math.sign(number) > 0 ? "changeUpColor" : "changeDownColor";
  return (
    <ToggleColor color={color} number={number} className="coin_price_change_percentage">
      {number.toFixed(2)}%
    </ToggleColor>
  );
}

export default ToggleColorWithValue;
