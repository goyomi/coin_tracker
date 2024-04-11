import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { CoinDataContext } from "../contexts/CoinDataContext";

import Header from "../components/layout/Header";
import Loading from "../components/Loading";
import Breadcrumb from "../components/layout/Breadcrumb";
import Footer from "../components/layout/Footer";
import CoinListTable from "../components/CoinListTable";

import { ScreenReaderOnly } from "../styles/common";
import { Main, NavTimebarWrapper } from "../styles/coins";

interface ICoinsProps {
  toggleOn: boolean;
  setToggleOn: (value: boolean) => void;
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

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header toggleOn={toggleOn} setToggleOn={setToggleOn} />
      <Main>
        <ScreenReaderOnly>Coin List Table</ScreenReaderOnly>
        <NavTimebarWrapper>
          <Breadcrumb links={links} />
        </NavTimebarWrapper>
        <CoinListTable />
      </Main>
      <Footer />
    </>
  );
}

export default Coins;
