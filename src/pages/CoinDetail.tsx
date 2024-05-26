import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
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

import { CoinListContext, ICoin } from "../contexts/Context";
import { introCoin, ohlc } from "../services/api";
import { Main, NavTimebarWrapper, ScreenReaderOnly } from "../styles/common";
import ErrorPage from "../components/ErrorPage";

const CoinWrapper = styled.div`
  display: flex;
  gap: 5rem;
  .left_zone {
    width: 40%;
  }
  .right_zone {
    width: 60%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .left_zone,
    .right_zone {
      width: 100%;
    }
  }
`;

const CoinIntro = styled.section`
  h2 {
    margin: 3rem 0 2rem 0;
    font-size: var(--font-size-web-large);
  }
  p {
    margin: 1rem 0;
    font-size: var(--font-size-web-medium);
    line-height: calc(var(--font-size-web-medium) * 1.5);
    text-align: justify;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: var(--font-size-mobile-large);
      margin: 2rem 0 1.5rem 0;
    }
    p {
      font-size: var(--font-size-mobile-medium);
      line-height: calc(var(--font-size-mobile-medium) * 1.5);
    }
  }
`;

interface IParams {
  coinId: string;
}

export interface ICoinIntro {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: object;
  platforms: object;
  detail_platforms: object;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: object;
  preview_listing: boolean;
  public_notice: object;
  additional_notices: object;
  localization: object;
  description: { en: string };
  links: { homepage: string[]; whitepaper: string; blockchain_site: [string]; repos_url: { github: [string] } };
  image: object;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  status_updates: object;
  last_updated: string;
}

function CoinDetail({ toggleOn, setToggleOn }: { toggleOn: boolean; setToggleOn: Dispatch<SetStateAction<boolean>> }) {
  const { data: coinListData } = useContext(CoinListContext);
  const { coinId } = useParams<IParams>();
  const selectedCoin = coinListData?.find((coin: ICoin) => coin.id === coinId);

  // data fetch
  // 1. ohlc
  const useOhlcQuery = (days: number, enabled: boolean) => {
    return useQuery([`${days}Days`, "ohlc", selectedCoin], () => ohlc(selectedCoin!.id, days), {
      enabled,
      refetchInterval: Infinity,
    });
  };
  // 2. intro
  const {
    data: coinIntro,
    isError: coinIntroError,
    refetch: coinIntroRefetch,
  } = useQuery<ICoinIntro>(["intro", coinId], () => introCoin(coinId), { refetchInterval: Infinity });
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
