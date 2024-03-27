import { useQuery } from "@tanstack/react-query";
import Routes from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { MainContainer } from "./styles/common";
import { ICoin } from "./types/coin";
import { fetchCoins } from "./services/api";
import { CoinDataContext } from "./contexts/CoinDataContext";
import { useState } from "react";

function App() {
  const [time, setTime] = useState("1h");
  const { data, isLoading, isError } = useQuery<ICoin[]>(["allCoins", time], () => fetchCoins(time));

  return (
    <CoinDataContext.Provider value={{ data: data ?? undefined, isLoading, isError }}>
      <GlobalStyle />
      <MainContainer>
        <Routes time={time} setTime={setTime} />
      </MainContainer>
    </CoinDataContext.Provider>
  );
}

export default App;
