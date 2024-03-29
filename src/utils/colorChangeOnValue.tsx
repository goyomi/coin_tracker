import { ToggleColor } from "../styles/coins";
import { IToggleNumber } from "../types/coin";

function ToggleColorWithValue({ number }: IToggleNumber) {
  const color = Math.sign(number) > 0 ? "changeUpColor" : "changeDownColor";
  return (
    <ToggleColor color={color} number={number} className="coin_price_change_percentage">
      {number.toFixed(2)}%
    </ToggleColor>
  );
}

export default ToggleColorWithValue;
