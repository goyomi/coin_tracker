import { useEffect, useState } from "react";
import { ITimes } from "../types/coin";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  ol {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
  ol li button {
    padding: 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  .isActive {
    font-weight: bolder;
    background-color: ${(props) => props.theme.onActiveColor};
    color: white;
  }
`;

function Timebar({ times, setDays, setTime }: ITimes) {
  const [isActive, setIsActive] = useState(localStorage.getItem("activeTime") || Object.keys(times)[0]);

  useEffect(() => {
    localStorage.setItem("activeTime", isActive);
  }, [isActive]);

  const handleClickBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    setIsActive(target.id);
    if (setDays) setDays(target.id);
    if (setTime) setTime(target.id);
  };

  return (
    <ButtonWrapper>
      <ol>
        {Object.entries(times).map(([key, value]) => (
          <li key={key}>
            <button id={key} className={isActive === key ? "isActive" : ""} onClick={handleClickBtn}>
              {value}
            </button>
          </li>
        ))}
      </ol>
    </ButtonWrapper>
  );
}

export default Timebar;
