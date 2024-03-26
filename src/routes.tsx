import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";

function Routes({ setTime }: { setTime: Function }) {
  return (
    <Router>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins setTime={setTime} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
