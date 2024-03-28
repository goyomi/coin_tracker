import { useQuery } from "@tanstack/react-query";
import { GlobalStyle } from "./styles/GlobalStyle";
import { MainContainer } from "./styles/common";
import { ICoin } from "./types/coin";
import { fetchCoins } from "./services/api";
import { CoinDataContext } from "./contexts/CoinDataContext";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [time, setTime] = useState("1h");
  const { data, isLoading, isError, error } = useQuery<ICoin[]>(["allCoins", time], () => fetchCoins(time), {
    staleTime: Infinity,
  });

  return (
    <CoinDataContext.Provider value={{ data, isLoading, isError, error }}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/error">
            <ErrorPage />
          </Route>
        </Switch>
        <MainContainer>
          <Switch>
            <Route path="/:coinId">
              <Coin />
            </Route>
            <Route path="/">
              <Coins time={time} setTime={setTime} />
            </Route>
          </Switch>
        </MainContainer>
      </Router>
    </CoinDataContext.Provider>
  );
}

export default App;
