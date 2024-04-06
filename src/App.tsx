import { useQuery } from "@tanstack/react-query";
import { GlobalStyle } from "./styles/GlobalStyle";
import { MainContainer } from "./styles/common";
import { ICoin } from "./types/type";
import { fetchCoins } from "./services/api";
import { CoinDataContext } from "./contexts/CoinDataContext";
import { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";
import ErrorPage from "./pages/ErrorPage";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "./styles/theme";

function App() {
  const [toggleOn, setToggleOn] = useState(() => Boolean(localStorage.getItem("toggleOn")) ?? false);
  const { data, isLoading, isError, error } = useQuery<ICoin[]>(["allCoins"], () => fetchCoins(), {
    staleTime: Infinity,
  });

  return (
    <CoinDataContext.Provider value={{ data, isLoading, isError, error }}>
      <ThemeProvider theme={toggleOn ? darkTheme : theme}>
        <GlobalStyle />
        <BrowserRouter basename="/coin_tracker">
          <Switch>
            <Route path="/error">
              <ErrorPage />
            </Route>
            <Route path="/:coinId">
              <MainContainer>
                <Coin toggleOn={toggleOn} setToggleOn={setToggleOn} />
              </MainContainer>
            </Route>
            <Route path="/">
              <MainContainer>
                <Coins toggleOn={toggleOn} setToggleOn={setToggleOn} />
              </MainContainer>
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </CoinDataContext.Provider>
  );
}

export default App;
