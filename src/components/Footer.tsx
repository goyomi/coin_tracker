import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterPart = styled.footer`
  width: 124rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  .img_wrapper {
    .logo {
      width: 10rem;
      height: auto;
      margin-bottom: 1rem;
    }
    .github_and_email {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .github {
        width: 2.5rem;
        height: 2.5rem;
      }
      .gmail {
        width: 2.2rem;
        height: 2.2rem;
        cursor: copy;
      }
    }
  }

  .text_wrapper {
    font-size: 1.5rem;
    line-height: 2rem;
    p {
      margin-bottom: 1rem;
      color: ${(props) => props.theme.secondFontColor};
    }
    strong a {
      font-weight: bold;
      color: #71c93c;
    }
  }
`;

function Footer() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ghdl1004797@gamil.com");
      alert("이메일 주소가 복사되었습니다!");
    } catch (err) {
      console.error("복사실패:", err);
    }
  };

  return (
    <FooterPart>
      <div className="img_wrapper">
        <Link to="/">
          <img className="logo" src="/public/assets/coin_tracker_logo.jpg" alt="coin tracker logo" />
        </Link>
        <div className="github_and_email">
          <a href="https://github.com/goyomi" target="_blank" rel="noopener noreferrer">
            <img className="github" src="/public/assets/github_logo.png" alt="GitHub Logo" />
          </a>
          <img className="gmail" src="/public/assets/gmail_logo.png" alt="Gmail Logo" onClick={copyEmail} />
        </div>
      </div>
      <div className="text_wrapper">
        <p>
          Coin Tracker offers a comprehensive overview of the leading 100 cryptocurrencies, presenting a broad array of
          data to enhance your understanding of the crypto market. The information provided by Coin Tracker serves
          solely for informational purposes, aiming to equip you with the insights needed to navigate the complex
          landscape of cryptocurrency. It's crucial to undertake thorough research independently prior to making any
          investment choices, as the dynamic nature of the crypto market can lead to rapid changes. Please be advised
          that the prices displayed on Coin Tracker may not always mirror the exact market prices due to fluctuations
          and market conditions, and should therefore be used as a guide rather than definitive financial advice.
        </p>
        <strong>
          Data from <a href="https://www.coingecko.com/api/documentation">CoinGecko</a>
        </strong>
      </div>
    </FooterPart>
  );
}

export default Footer;
