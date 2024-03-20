import Routes from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { MainContainer } from "./styles/common";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <h1>Coin Tracker</h1>
        <Routes />
      </MainContainer>
    </>
  );
}

export default App;
