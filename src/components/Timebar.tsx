import { useState } from "react";
import { ITimes } from "../types/coin";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: right;
  ol {
    display: flex;
    gap: 1rem;
  }
  ol li button {
    padding: 1rem;
    font-size: 1.5rem;
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
  const [isActive, setIsActive] = useState(Object.keys(times)[0]);

  const handleClickBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    setIsActive(target.id);
    if (setDays) setDays(target.id);
    if (setTime) setTime(target.id);
  };

  return (
    <ButtonWrapper>
      <ol>
        {Object.entries(times).map(([id, value]) => (
          <li key={id} id={id}>
            <button id={id} className={isActive === id ? "isActive" : ""} onClick={handleClickBtn}>
              {value}
            </button>
          </li>
        ))}
      </ol>
    </ButtonWrapper>
  );
}

export default Timebar;
