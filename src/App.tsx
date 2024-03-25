import { useQuery } from "@tanstack/react-query";
import Routes from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { MainContainer } from "./styles/common";
import { ICoin } from "./types/coin";
import { fetchCoins } from "./services/api";
import { CoinDataContext } from "./contexts/CoinDataContext";

function App() {
  const { data, isLoading } = useQuery<ICoin[]>(["allCoins"], fetchCoins);

  return (
    <CoinDataContext.Provider value={{ data: data ?? undefined, isLoading }}>
      <GlobalStyle />
      <MainContainer>
        <Routes />
      </MainContainer>
    </CoinDataContext.Provider>
  );
}

export default App;
