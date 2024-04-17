import { Link } from "react-router-dom";
import styled from "styled-components";
import { IToggleProps } from "../../types/type";

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
  background-color: ${(props) => (props.theme.mode === "dark" ? "#e9f6ff" : "")};
  border-radius: ${(props) => (props.theme.mode === "dark" ? "0.5rem" : "")};

  @media (max-width: 768px) {
    width: 6rem;
  }
`;

const ToggleButton = styled.button
  .withConfig({ shouldForwardProp: (prop) => !["toggleOn"].includes(prop) })
  .attrs<IToggleButton>(({ theme, toggleOn }) => ({
    style: {
      backgroundColor: toggleOn ? theme.onActiveColor : "rgb(233,233,234)",
    },
  }))`
  width: 5.5rem;
  height: 3rem;
  border-radius: 3rem;
  transition: 0.6s cubic-bezier(0.4, 0, 1, 1);
  .circle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    margin-left: ${(props) => (props.toggleOn ? "auto" : "")};
  }

  @media (max-width: 768px) {
    width: 4rem;  
    height: 2.2rem;  
    .circle {
      width: 1.5rem;  
      height: 1.5rem;  
    }
  }
`;

interface IToggleButton {
  toggleOn: boolean;
}

function Header({ toggleOn, setToggleOn }: IToggleProps) {
  const handleToggleButton = () => {
    setToggleOn((current: boolean) => !current);
    localStorage.setItem("toggleOn", toggleOn + "");
  };

  return (
    <HeaderPart>
      <LogoWrapper>
        <h1>
          <Link to="/">
            <Logo src="assets/coin_tracker_logo.png" alt="Coin Tracker Logo" />
          </Link>
        </h1>
        <ToggleButton onClick={handleToggleButton} toggleOn={toggleOn}>
          <div className="circle" />
        </ToggleButton>
      </LogoWrapper>
    </HeaderPart>
  );
}

export default Header;
