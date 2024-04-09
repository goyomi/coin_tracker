import React, { useContext, useEffect, useMemo, useState } from "react";
import { CoinDataContext } from "../contexts/CoinDataContext";
import { useHistory, useParams } from "react-router-dom";
import { CoinIntro, CoinWrapper } from "../styles/coin";
import { ScreenReaderOnly } from "../styles/common";
import { ICoin, ICoinIntro, IOhlc, IParams, IToggleProps } from "../types/type";
import Chart from "../components/Chart";
import { useQuery } from "@tanstack/react-query";
import { introCoin, ohlc } from "../services/api";
import parse from "html-react-parser";
import Loading from "../components/Loading";
import Header from "../components/Header";
import { NavTimebarWrapper } from "../styles/coins";
import Breadcrumb from "../components/Breadcrumb";
import CoinProfile from "../components/CoinProfile";
import CoinConverter from "../components/CoinConverter";
import CoInHistoryTable from "../components/CoinHistoryTable";
import CoinDetailTable from "../components/CoinDetailTable";
import CoinInfoTable from "../components/CoinInfoTable";

function Coin({ toggleOn, setToggleOn }: IToggleProps) {
  // data fetch - coin 상세정보
  const { data: coinData, isLoading, isError } = useContext(CoinDataContext);
  const { coinId } = useParams<IParams>();
  const selectedCoin = coinData?.find((coin: ICoin) => coin.id === coinId);
  // data fetch - chart
  const query1 = useQuery<IOhlc[]>(
    ["oneDay", "ohlc", selectedCoin],
    () => {
      return ohlc(selectedCoin!.id, 1);
    },
    { staleTime: Infinity }
  );
  const query7 = useQuery<IOhlc[]>(
    ["oneWeek", "ohlc", selectedCoin],
    () => {
      return ohlc(selectedCoin!.id, 7);
    },
    { staleTime: Infinity }
  );
  const query30 = useQuery<IOhlc[]>(
    ["oneMonth", "ohlc", selectedCoin],
    () => {
      return ohlc(selectedCoin!.id, 30);
    },
    { staleTime: Infinity }
  );
  const query365 = useQuery<IOhlc[]>(
    ["oneYear", "ohlc", selectedCoin],
    () => {
      return ohlc(selectedCoin!.id, 365);
    },
    { staleTime: Infinity }
  );

  const queries = useMemo(
    () => ({
      "1": query1,
      "7": query7,
      "30": query30,
      "365": query365,
    }),
    [query1, query7, query30, query365]
  );
  // data fetch - coin 소개(about)
  const {
    data: coinIntro,
    isLoading: coinIntroLoading,
    isError: coinIntroError,
  } = useQuery<ICoinIntro>(["intro", coinId], () => introCoin(coinId), { staleTime: Infinity });
  const textLine = coinIntro?.description?.en.split("\r\n");

  const [chartQueryLoading, setChartQueryLoading] = useState(false);

  useEffect(() => {
    const isQueriesLoading = Object.values(queries).some((query) => query.isLoading);
    setChartQueryLoading(isQueriesLoading);
  }, [queries]);

  const isLoadingState = [isLoading, chartQueryLoading, coinIntroLoading];
  const isAnyLoading = isLoadingState.some((state) => state);

  const links = [
    { name: "Coins Currency", path: "/" },
    { name: coinId, path: `/${coinId}` },
  ];

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
              <Chart selectedCoin={selectedCoin} queries={queries} toggleOn={toggleOn} />
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
