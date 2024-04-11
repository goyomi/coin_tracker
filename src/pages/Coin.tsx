import React, { useContext, useEffect, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import parse from "html-react-parser";

import Header from "../components/layout/Header";
import Chart from "../components/Chart";
import Loading from "../components/Loading";
import Breadcrumb from "../components/layout/Breadcrumb";
import CoinProfile from "../components/CoinProfile";
import CoinConverter from "../components/CoinConverter";
import CoInHistoryTable from "../components/CoinHistoryTable";
import CoinDetailTable from "../components/CoinDetailTable";
import CoinInfoTable from "../components/CoinInfoTable";
import Timebar from "../components/layout/Timebar";

import { CoinDataContext } from "../contexts/CoinDataContext";
import { introCoin, ohlc } from "../services/api";
import { ICoin, ICoinIntro, IParams, IToggleProps } from "../types/type";
import { CoinIntro, CoinWrapper } from "../styles/coin";
import { ScreenReaderOnly } from "../styles/common";
import { NavTimebarWrapper } from "../styles/coins";

function Coin({ toggleOn, setToggleOn }: IToggleProps) {
  const { data: coinData, isLoading, isError } = useContext(CoinDataContext);
  const { coinId } = useParams<IParams>();
  const selectedCoin = coinData?.find((coin: ICoin) => coin.id === coinId);

  // data fetch
  // 1. ohlc
  const useOhlcQuery = (days: number) => {
    return useQuery([`${days}Days`, "ohlc", selectedCoin], () => ohlc(selectedCoin!.id, days), { staleTime: Infinity });
  };
  // 2. intro
  const {
    data: coinIntro,
    isLoading: coinIntroLoading,
    isError: coinIntroError,
  } = useQuery<ICoinIntro>(["intro", coinId], () => introCoin(coinId), { staleTime: Infinity });
  const textLine = coinIntro?.description?.en.split("\r\n");

  // Props
  // 1. Chart
  const query1 = useOhlcQuery(1);
  const query7 = useOhlcQuery(7);
  const query30 = useOhlcQuery(30);
  const query365 = useOhlcQuery(365);
  const queries = useMemo(
    () => ({
      "1": query1,
      "7": query7,
      "30": query30,
      "365": query365,
    }),
    [query1, query7, query30, query365]
  );
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
  // 1. loading
  const isLoadingState = [isLoading, coinIntroLoading];
  const isAnyLoading = isLoadingState.some((state) => state);
  // 2. Error
  const history = useHistory();
  const queriesError = query1.isError || query7.isError || query30.isError || query365.isError;
  useEffect(() => {
    if (isError || coinIntroError || queriesError) {
      history.push("/error");
    }
  }, [history, isError, coinIntroError, queriesError]);

  return (
    <>
      {isAnyLoading ? (
        <Loading />
      ) : (
        <>
          <Header toggleOn={toggleOn} setToggleOn={setToggleOn} />
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
        </>
      )}
    </>
  );
}

export default Coin;
