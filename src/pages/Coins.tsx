import { A11y } from "../styles/common";
import { Main, NavTimebarWrapper } from "../styles/coins";
import Header from "../components/Header";
import { useContext, useEffect } from "react";
import { CoinDataContext } from "../contexts/CoinDataContext";
import Loading from "../components/Loading";
// import Timebar from "../components/Timebar";
import Breadcrumb from "../components/Breadcrumb";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import CoinListTable from "../components/CoinListTable";

interface ICoinsProps {
  time: string;
  setTime: Function;
  toggleOn: boolean;
  setToggleOn: Function;
}

function Coins({ toggleOn, setToggleOn }: ICoinsProps) {
  const { isLoading, isError, error } = useContext(CoinDataContext);
  // const times = {
  //   "1h": "1h",
  //   "24h": "24h",
  //   "7d": "7d",
  //   // "30d": "30d",
  // };
  const links = [{ name: "Coins Currency", path: "/" }];
  const history = useHistory();
  useEffect(() => {
    if (isError) {
      history.push("/error");
      console.log("에러메세지:", error);
    }
  }, [isError, history, error]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header toggleOn={toggleOn} setToggleOn={setToggleOn} />
          <Main>
            <A11y>Coin Tracker Table</A11y>
            <NavTimebarWrapper>
              <Breadcrumb links={links} />
              {/* <Timebar times={times} setTime={setTime} /> */}
            </NavTimebarWrapper>
            <CoinListTable />
          </Main>
          <Footer />
        </>
      )}
    </>
  );
}

export default Coins;
