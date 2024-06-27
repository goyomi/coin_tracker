import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterPart = styled.footer`
  max-width: var(--width-web-max);
  width: var(--width-web);
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1024px) {
    max-width: var(--width-tablet-max);
    padding: 1.5rem;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
  }
`;

const LogoAndContacts = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
  }
`;

const LogoImg = styled.img`
  width: 10rem;
  height: auto;
  aspect-ratio: 16 / 9;
  margin-bottom: 1rem;
  background-color: ${(props) => (props.theme.mode === "dark" ? "#e9f6ff" : "")};
  border-radius: ${(props) => (props.theme.mode === "dark" ? "0.5rem" : "")};

  @media (max-width: 768px) {
    width: 6rem;
    margin-bottom: 0rem;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 6rem;
  }
`;

const GitHubIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "")};
  border-radius: ${(props) => (props.theme.mode === "dark" ? "50%" : "")};

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const GmailIcon = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  cursor: copy;

  @media (max-width: 768px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

const FooterTextWrapper = styled.div`
  font-size: var(--font-size-web-small);
  line-height: 2rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-small);
    line-height: calc(var(--font-size-mobile-small) * 1.3);
  }
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
      <LogoAndContacts>
        <Link to="/">
          <LogoImg src={`${process.env.PUBLIC_URL}/assets/coin_tracker_logo.webp`} alt="coin tracker logo" />
        </Link>
        <ContactWrapper>
          <a href="https://github.com/goyomi/coin_tracker" target="_blank" rel="noopener noreferrer">
            <GitHubIcon src={`${process.env.PUBLIC_URL}/assets/github_logo.png`} alt="GitHub Logo" />
          </a>
          <GmailIcon src={`${process.env.PUBLIC_URL}/assets/gmail_logo.png`} alt="Gmail Logo" onClick={copyEmail} />
        </ContactWrapper>
      </LogoAndContacts>
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
