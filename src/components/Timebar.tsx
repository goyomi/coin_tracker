import { useState } from "react";
import { ButtonWrapper } from "../styles/timebar";
import { ITimes } from "../types/coin";

function Timebar({ times, setDays, setTime }: ITimes) {
  const [isActive, setIsActive] = useState(Object.keys(times)[0]);

  const handleClickBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    setIsActive(target.id);
    if (setDays) setDays(target.id);
    if (setTime) setTime(target.id);
  };

  return (
    <ButtonWrapper>
      {Object.entries(times).map(([id, value]) => (
        <button
          id={id}
          className={isActive === id ? "isActive" : ""}
          onClick={handleClickBtn}
        >
          {value}
        </button>
      ))}
    </ButtonWrapper>
  );
}

export default Timebar;
