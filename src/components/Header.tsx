import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IToggleButton {
  toggleOn: boolean;
}

const HeaderPart = styled.header`
  position: fixed;
  top: 0;
  left: auto;
  width: 124rem;
  padding: 2rem;
  background-color: #fff;
  z-index: 20;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 .logo {
      width: 10rem;
      height: auto;
    }
  }
`;

const ToggleButton = styled.button<IToggleButton>`
  width: 5.5rem;
  height: 3rem;
  border-radius: 3rem;
  background-color: ${(props) => (props.toggleOn ? props.theme.onActiveColor : "rgb(233,233,234)")};
  transition: 0.6s cubic-bezier(0.4, 0, 1, 1);
  .circle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    margin-left: ${(props) => (props.toggleOn ? "auto" : "")};
  }
`;

function Header() {
  const [toggleOn, setToggleOn] = useState(false);
  const handleToggleButton = () => {
    setToggleOn(!toggleOn);
  };
  return (
    <HeaderPart>
      <div>
        <h1>
          <Link to="/">
            <img className="logo" src="/assets/coin_tracker_logo.jpg" alt="Coin Tracker Logo" />
          </Link>
        </h1>
        <ToggleButton onClick={handleToggleButton} toggleOn={toggleOn}>
          <div className="circle" />
        </ToggleButton>
      </div>
    </HeaderPart>
  );
}

export default Header;
