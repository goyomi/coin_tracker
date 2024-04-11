import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterPart = styled.footer`
  width: 124rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const LogoImg = styled.img`
  width: 10rem;
  height: auto;
  margin-bottom: 1rem;
  background-color: ${(props) => (props.theme.mode === "dark" ? "#e9f6ff" : "")};
  border-radius: ${(props) => (props.theme.mode === "dark" ? "0.5rem" : "")};
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const GitHubIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "")};
  border-radius: ${(props) => (props.theme.mode === "dark" ? "50%" : "")};
`;

const GmailIcon = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  cursor: copy;
`;

const FooterTextWrapper = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.secondFontColor};
`;

const DataProvider = styled.a`
  font-weight: bold;
  color: #71c93c;
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
      <div>
        <Link to="/">
          <LogoImg src="assets/coin_tracker_logo.png" alt="coin tracker logo" />
        </Link>
        <ContactWrapper>
          <a href="https://github.com/goyomi" target="_blank" rel="noopener noreferrer">
            <GitHubIcon src="assets/github_logo.png" alt="GitHub Logo" />
          </a>
          <GmailIcon src="assets/gmail_logo.png" alt="Gmail Logo" onClick={copyEmail} />
        </ContactWrapper>
      </div>
      <FooterTextWrapper>
        <FooterText>
          Coin Tracker offers a comprehensive overview of the leading 100 cryptocurrencies, presenting a broad array of
          data to enhance your understanding of the crypto market. The information provided by Coin Tracker serves
          solely for informational purposes, aiming to equip you with the insights needed to navigate the complex
          landscape of cryptocurrency. It's crucial to undertake thorough research independently prior to making any
          investment choices, as the dynamic nature of the crypto market can lead to rapid changes. Please be advised
          that the prices displayed on Coin Tracker may not always mirror the exact market prices due to fluctuations
          and market conditions, and should therefore be used as a guide rather than definitive financial advice.
        </FooterText>
        <strong>
          Data from{" "}
          <DataProvider href="https://www.coingecko.com/api/documentation" target="_blank" rel="noopener noreferrer">
            CoinGecko
          </DataProvider>
        </strong>
      </FooterTextWrapper>
    </FooterPart>
  );
}

export default Footer;
