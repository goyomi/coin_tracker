import { Link } from "react-router-dom";
import { HeadTitle } from "../styles/header";

function Header() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ghdl1004797@gamil.com");
      alert("이메일 주소가 복사되었습니다!");
    } catch (err) {
      console.error("복사실패:", err);
    }
  };

  return (
    <HeadTitle>
      <h1>
        <Link to="/">
          <img
            className="logo"
            src="/assets/coin_tracker_logo.jpg"
            alt="Coin Tracker Logo"
          />
        </Link>
        <div>
          <a
            href="https://github.com/goyomi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="github"
              src="/assets/github_logo.png"
              alt="GitHub Logo"
            />
          </a>
          <img
            className="email"
            src="/assets/gmail_logo.png"
            alt="Gmail Logo"
            onClick={copyEmail}
          />
        </div>
      </h1>
    </HeadTitle>
  );
}

export default Header;
