import { Link } from "react-router-dom";
import styled from "styled-components";
import { IToggleProps } from "../../types/type";

const HeaderPart = styled.header`
  position: fixed;
  top: 0;
  left: auto;
  width: 124rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.backgroundColor};
  z-index: 20;
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
