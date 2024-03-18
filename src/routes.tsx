import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";

function Routes() {
  return (
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
  );
}

export default Routes;
