import { useEffect, useState } from "react";
import { LoadingSection } from "../styles/loading";

function Loading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingSection>
      <img
        src="/assets/coingecko_logo_with_dark_text.png"
        alt="coin gecko logo"
      />
      <div className="loading_text_wrapper">
        <span className="loading">Loading{dots}</span>
        <p>Please do not close and wait for a moment.</p>
        <p>Currently retrieving coin information from Coin Gecko.</p>
      </div>
    </LoadingSection>
  );
}
export default Loading;
