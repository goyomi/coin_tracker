import { ToggleColor } from "../styles/coins";
import { IToggleNumber } from "../types/coin";

function ToggleColorWithValue({ number }: IToggleNumber) {
  const color = Math.sign(number) > 0 ? "changeUpColor" : "changeDownColor";
  return (
    <ToggleColor color={color} number={number}>
      {number}%
    </ToggleColor>
  );
}

export default ToggleColorWithValue;
