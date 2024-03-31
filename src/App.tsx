import { useQuery } from "@tanstack/react-query";
import { GlobalStyle } from "./styles/GlobalStyle";
import { MainContainer } from "./styles/common";
import { ICoin } from "./types/coin";
import { fetchCoins } from "./services/api";
import { CoinDataContext } from "./contexts/CoinDataContext";
import { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";
import ErrorPage from "./pages/ErrorPage";
import Loading from "./pages/LoadingPage";

function App() {
  const [time, setTime] = useState("1h");
  const { data, isLoading, isError, error } = useQuery<ICoin[]>(["allCoins", time], () => fetchCoins(time), {
    staleTime: Infinity,
  });

  return (
    <CoinDataContext.Provider value={{ data, isLoading, isError, error }}>
      <GlobalStyle />
      <BrowserRouter basename="/coin_tracker">
        <Switch>
          <Route path="/loading">
            <Loading />
          </Route>
          <Route path="/error">
            <ErrorPage />
          </Route>
          <Route path="/:coinId">
            <MainContainer>
              <Coin />
            </MainContainer>
          </Route>
          <Route path="/">
            <MainContainer>
              <Coins time={time} setTime={setTime} />
            </MainContainer>
          </Route>
        </Switch>
      </BrowserRouter>
    </CoinDataContext.Provider>
  );
}

export default App;
