import { useQuery } from "@tanstack/react-query";
import { GlobalStyle } from "./styles/GlobalStyle";
import { MainContainer } from "./styles/common";
import { ICoin } from "./types/type";
import { fetchCoins } from "./services/api";
import { CoinListContext } from "./contexts/Context";
import { Suspense, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CoinDetail from "./pages/CoinDetail";
import CoinList from "./pages/CoinList";
import ErrorPage from "./pages/ErrorPage";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "./styles/theme";
import Loading from "./components/Loading";

function App() {
  const [toggleOn, setToggleOn] = useState(() => Boolean(localStorage.getItem("toggleOn")) ?? true);
  const { data, isLoading, isError, error } = useQuery<ICoin[]>(["allCoins"], () => fetchCoins());

  return (
    <CoinListContext.Provider value={{ data, isLoading, isError, error }}>
      <ThemeProvider theme={toggleOn ? darkTheme : theme}>
        <GlobalStyle />
        <BrowserRouter basename="/coin_tracker">
          <Switch>
            <Route path="/error">
              <ErrorPage />
            </Route>
            <Route path="/:coinId">
              <MainContainer>
                <Suspense fallback={<Loading />}>
                  <CoinDetail toggleOn={toggleOn} setToggleOn={setToggleOn} />
                </Suspense>
              </MainContainer>
            </Route>
            <Route path="/">
              <MainContainer>
                <Suspense fallback={<Loading />}>
                  <CoinList toggleOn={toggleOn} setToggleOn={setToggleOn} />
                </Suspense>
              </MainContainer>
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </CoinListContext.Provider>
  );
}

export default App;
