import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";

function Routes({ time, setTime }: { time: string; setTime: Function }) {
  return (
    <Router>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins time={time} setTime={setTime} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
