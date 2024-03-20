import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";
import { CoinDataContext } from "./contexts/CoinDataContext";
import { useQuery } from "@tanstack/react-query";
import { ICoin } from "./types/coin";
import { fetchCoins } from "./services/api";

function Routes() {
  const { data } = useQuery<ICoin[]>(["allCoins"], fetchCoins, { refetchInterval: 60000 });
  return (
    <CoinDataContext.Provider value={data ?? null}>
      <Router>
        <Switch>
          <Route path="/:coinId">
            <Coin />
          </Route>
          <Route path="/">
            <Coins />
          </Route>
        </Switch>
      </Router>
    </CoinDataContext.Provider>
  );
}

export default Routes;
