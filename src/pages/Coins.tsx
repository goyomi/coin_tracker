import { A11y } from "../styles/common";
import { Main, NavTimebarWrapper } from "../styles/coins";
import Header from "../components/Header";
import { useContext, useEffect } from "react";
import { CoinDataContext } from "../contexts/CoinDataContext";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import CoinListTable from "../components/CoinListTable";

interface ICoinsProps {
  toggleOn: boolean;
  setToggleOn: Function;
}

function Coins({ toggleOn, setToggleOn }: ICoinsProps) {
  const { isLoading, isError, error } = useContext(CoinDataContext);
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
