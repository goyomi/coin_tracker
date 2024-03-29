import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterPart = styled.footer`
  width: 104rem;
  height: 10rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  .img_wrapper {
    .logo {
      width: 10rem;
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
    font-size: 2rem;
    line-height: 2.5rem;
    p {
      margin-bottom: 1rem;
      color: ${(props) => props.theme.secondFontColor};
    }
    strong a {
      font-weight: bold;
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
          <img className="logo" src="/assets/coin_tracker_logo.jpg" alt="coin tracker logo" />
        </Link>
        <div className="github_and_email">
          <a href="https://github.com/goyomi" target="_blank" rel="noopener noreferrer">
            <img className="github" src="/assets/github_logo.png" alt="GitHub Logo" />
          </a>
          <img className="gmail" src="/assets/gmail_logo.png" alt="Gmail Logo" onClick={copyEmail} />
        </div>
      </div>
      <div className="text_wrapper">
        <p>
          Provides information on the top 100 coins. Data provided on this site is for informational purposes only.
          Always do your own research before making any investment decisions. Prices may not be accurate and may differ
          from the actual market price.
        </p>
        <strong>
          Data from <a href="https://www.coingecko.com/api/documentation">CoinGecko</a>
        </strong>
      </div>
    </FooterPart>
  );
}

export default Footer;
