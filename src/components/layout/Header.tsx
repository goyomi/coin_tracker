import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderPart = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: var(--width-web-max);
  padding: 2rem 3rem;
  background-color: ${(props) => props.theme.backgroundColor};
  z-index: 20;

  @media (max-width: 1024px) {
    max-width: var(--width-tablet-max);
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 10rem;
  height: auto;
  aspect-ratio: 16 / 9;
  background-color: ${(props) => (props.theme.mode === "dark" ? "#e9f6ff" : "")};
  border-radius: ${(props) => (props.theme.mode === "dark" ? "0.5rem" : "")};

  @media (max-width: 768px) {
    width: 6rem;
  }
`;

const ToggleButton = styled.button<{ $toggleOn: boolean }>`
  width: 5.5rem;
  height: 3rem;
  border-radius: 3rem;
  transition: 0.4s cubic-bezier(0.4, 0, 1, 1);
  background-color: ${(props) => (props.$toggleOn ? props.theme.onActiveColor : "rgb(233,233,234)")};

  @media (max-width: 768px) {
    width: 4rem;
    height: 2.2rem;
  }
`;

const Circle = styled.div<{ $toggleOn: boolean }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: rgb(255, 254, 255);
  margin-left: ${(props) => (props.$toggleOn ? "auto" : "")};

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

function Header({ toggleOn, setToggleOn }: { toggleOn: boolean; setToggleOn: Dispatch<SetStateAction<boolean>> }) {
  const handleToggleButton = () => {
    setToggleOn((current: boolean) => !current);
  };

  return (
    <HeaderPart>
      <LogoWrapper>
        <h1>
          <Link to="/">
            <Logo src={`${process.env.PUBLIC_URL}/assets/coin_tracker_logo.png`} alt="Coin Tracker Logo" />
          </Link>
        </h1>
        <ToggleButton onClick={handleToggleButton} $toggleOn={toggleOn}>
          <Circle $toggleOn={toggleOn} />
        </ToggleButton>
      </LogoWrapper>
    </HeaderPart>
  );
}

export default Header;
