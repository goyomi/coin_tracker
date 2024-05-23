import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import parse from "html-react-parser";

import Header from "../components/layout/Header";
import Chart from "../components/Chart";
import Breadcrumb from "../components/layout/Breadcrumb";
import CoinProfile from "../components/CoinProfile";
import CoinConverter from "../components/CoinConverter";
import CoInHistoryTable from "../components/CoinHistoryTable";
import CoinDetailTable from "../components/CoinDetailTable";
import CoinInfoTable from "../components/CoinInfoTable";
import Timebar from "../components/layout/Timebar";
import Footer from "../components/layout/Footer";

import { CoinListContext } from "../contexts/Context";
import { introCoin, ohlc } from "../services/api";
import { ICoin, ICoinIntro, IParams, IToggleProps } from "../types/type";
import { CoinIntro, CoinWrapper } from "../styles/coin";
import { Main, NavTimebarWrapper, ScreenReaderOnly } from "../styles/common";
import ErrorPage from "../components/ErrorPage";

function CoinDetail({ toggleOn, setToggleOn }: IToggleProps) {
  const { data: coinListData } = useContext(CoinListContext);
  const { coinId } = useParams<IParams>();
  const selectedCoin = coinListData?.find((coin: ICoin) => coin.id === coinId);

  // data fetch
  // 1. ohlc
  const useOhlcQuery = (days: number, enabled: boolean) => {
    return useQuery([`${days}Days`, "ohlc", selectedCoin], () => ohlc(selectedCoin!.id, days), { enabled });
  };
  // 2. intro
  const {
    data: coinIntro,
    isError: coinIntroError,
    refetch: coinIntroRefetch,
  } = useQuery<ICoinIntro>(["intro", coinId], () => introCoin(coinId));
  const textLine = coinIntro?.description?.en.split("\r\n");

  // Props
  // 1. Chart
  const query1 = useOhlcQuery(1, true);
  const query7 = useOhlcQuery(7, query1.isSuccess);
  const query30 = useOhlcQuery(30, query7.isSuccess);
  const query365 = useOhlcQuery(365, query30.isSuccess);
  const queries = {
    "1": query1,
    "7": query7,
    "30": query30,
    "365": query365,
  };
  // 2. Breadcrumbs
  const links = [
    { name: "Coins Currency", path: "/" },
    { name: coinId, path: `/${coinId}` },
  ];
  // 3. timeProp >> Timebar, Chart
  const times = { "1": "1h", "7": "1w", "30": "1m", "365": "1y" };
  const [days, setDays] = useState("1");
  const { data: currentData } = queries[days.toString() as keyof typeof queries];

  // pages
  // 1. Error
  const ohlcError = Object.values(queries).some((query) => query.isError);
  const ohlcRefetch = {
    refetch1: query1.refetch,
    refetch7: query7.refetch,
    refetch30: query30.refetch,
    refetch365: query365.refetch,
  };
  const isError = coinIntroError || ohlcError;
  // 2. refetch
  const refetch = () => {
    if (coinIntroError) coinIntroRefetch();

    if (query1.isError) {
      return ohlcRefetch.refetch1();
    } else if (query7.isError) {
      return ohlcRefetch.refetch7();
    } else if (query30.isError) {
      return ohlcRefetch.refetch30();
    } else if (query365.isError) {
      return ohlcRefetch.refetch365();
    }
  };

  return (
    <>
      {isError ? (
        <ErrorPage isError={isError} refetch={refetch} />
      ) : (
        <>
          <Header toggleOn={toggleOn} setToggleOn={setToggleOn} />
          <Main>
            <NavTimebarWrapper>
              <Breadcrumb links={links} />
            </NavTimebarWrapper>
            <CoinWrapper>
              <ScreenReaderOnly as="h1">Coin detail page</ScreenReaderOnly>
              {selectedCoin ? (
                <div className="left_zone">
                  <CoinProfile selectedCoin={selectedCoin} />
                  <CoinDetailTable selectedCoin={selectedCoin} />
                  <CoinConverter selectedCoin={selectedCoin} />
                  <CoInHistoryTable selectedCoin={selectedCoin} />
                  <CoinInfoTable selectedCoin={selectedCoin} coinIntro={coinIntro} />
                </div>
              ) : null}
              <div className="right_zone">
                <Timebar times={times} setDays={setDays} />
                <Chart selectedCoin={selectedCoin} queries={queries} toggleOn={toggleOn} currentData={currentData} />
                <CoinIntro>
                  <h2>About</h2>
                  {textLine?.map((text: string, idx: number) => (
                    <React.Fragment key={idx}>{parse(`<p>${text}</p>`)}</React.Fragment>
                  ))}
                </CoinIntro>
              </div>
            </CoinWrapper>
          </Main>
          <Footer />
        </>
      )}
    </>
  );
}

export default CoinDetail;
