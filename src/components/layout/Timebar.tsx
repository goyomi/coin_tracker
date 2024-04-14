import { useState } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const OrderList = styled.ol`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const TimeButton = styled.button<{ isActive: boolean }>`
  padding: 1rem;
  font-size: var(--font-size-web-small);
  text-transform: uppercase;
  border-radius: 0.5rem;
  cursor: pointer;
  /* isActive */
  font-weight: ${(props) => (props.isActive ? "bolder" : "normal")};
  background-color: ${(props) => (props.isActive ? props.theme.onActiveColor : "inherits")};
  color: ${(props) => (props.isActive ? "white" : "inherits")};

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: var(--font-size-mobile-small); // 모바일에서는 폰트 크기 줄임
  }
`;

interface ITimes {
  times: { [key: string]: string };
  setDays?: Function;
  setTime?: Function;
}

function Timebar({ times, setDays, setTime }: ITimes) {
  const [isActive, setIsActive] = useState("1");

  const handleClickBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    setIsActive(target.id);
    if (setDays) setDays(target.id);
    if (setTime) setTime(target.id);
  };

  return (
    <ButtonWrapper>
      <OrderList>
        {Object.entries(times).map(([key, value]) => (
          <li key={key}>
            <TimeButton id={key} isActive={isActive === key} onClick={handleClickBtn}>
              {value}
            </TimeButton>
          </li>
        ))}
      </OrderList>
    </ButtonWrapper>
  );
}

export default Timebar;
