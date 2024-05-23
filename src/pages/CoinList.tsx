import { useContext } from "react";

import { CoinListContext } from "../contexts/Context";

import Header from "../components/layout/Header";
import Breadcrumb from "../components/layout/Breadcrumb";
import Footer from "../components/layout/Footer";
import CoinListTable from "../components/CoinListTable";
import ErrorPage from "../components/ErrorPage";

import { Main, NavTimebarWrapper, ScreenReaderOnly } from "../styles/common";

interface ICoinsProps {
  toggleOn: boolean;
  setToggleOn: (value: boolean) => void;
}

function CoinList({ toggleOn, setToggleOn }: ICoinsProps) {
  const { isError, refetch } = useContext(CoinListContext);
  const links = [{ name: "Coins Currency", path: "/" }];

  return (
    <>
      {isError ? (
        <ErrorPage isError={isError} refetch={refetch} />
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
      )}
    </>
  );
}

export default CoinList;
