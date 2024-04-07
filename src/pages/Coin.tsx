import React, { useContext, useEffect, useMemo, useState } from "react";
import { CoinDataContext } from "../contexts/CoinDataContext";
import { useHistory, useParams } from "react-router-dom";
import {
  CoinIntro,
  CoinWrapper,
  HistoricalPrice,
  HistoricalPriceTable,
  Information,
  InformationTable,
} from "../styles/coin";
import { ScreenReaderOnly } from "../styles/common";
import { ICoin, ICoinIntro, IOhlc, IParams, IToggleProps } from "../types/type";
import ThousandSeparator from "../utils/thousandSeparator";
import Chart from "../components/Chart";
import { useQuery } from "@tanstack/react-query";
import { introCoin, ohlc } from "../services/api";
import parse from "html-react-parser";
import Loading from "../components/Loading";
import Header from "../components/Header";
import { NavTimebarWrapper } from "../styles/coins";
import Breadcrumb from "../components/Breadcrumb";
import CoinInfoTable from "../components/CoinInfoTable";
import CoinProfile from "../components/CoinProfile";
import CoinConverter from "../components/CoinConverter";

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
                <CoinInfoTable
                  hidden={true}
                  title="Coin Data Table"
                  data={[
                    { label: "Market Cap", value: selectedCoin.market_cap },
                    { label: "Fully Diluted Valuation", value: selectedCoin?.fully_diluted_valuation },
                    { label: "24 Hour Trading Vol", value: selectedCoin.total_volume },
                    { label: "Circulating Supply", value: selectedCoin.circulating_supply },
                    { label: "Total Supply", value: selectedCoin.total_supply },
                    { label: "Max Supply", value: selectedCoin.max_supply },
                  ]}
                />
                <CoinConverter selectedCoin={selectedCoin} />
                <HistoricalPrice>
                  <h3>
                    <span className="coin_symbol">{selectedCoin?.symbol}</span>
                    <span>Historical Price</span>
                  </h3>
                  <HistoricalPriceTable>
                    <tbody>
                      <tr>
                        <th>24h Range</th>
                        <td>
                          <ThousandSeparator number={selectedCoin?.low_24h} />
                          <span className="separator">-</span>
                          <ThousandSeparator number={selectedCoin?.high_24h} />
                        </td>
                      </tr>
                      <tr>
                        <th>All-Time High</th>
                        <td>
                          <i>({selectedCoin?.ath_date ? new Date(selectedCoin?.ath_date).toLocaleDateString() : ""})</i>
                          <ThousandSeparator number={selectedCoin?.ath} />
                        </td>
                      </tr>
                      <tr>
                        <th>All-Time Low</th>
                        <td>
                          <i>({selectedCoin?.atl_date ? new Date(selectedCoin.atl_date).toLocaleDateString() : ""})</i>
                          <ThousandSeparator number={selectedCoin?.atl} />
                        </td>
                      </tr>
                    </tbody>
                  </HistoricalPriceTable>
                </HistoricalPrice>
                <Information>
                  <h3>
                    <span className="coin_symbol">{selectedCoin?.symbol}</span>
                    <span>Information</span>
                  </h3>
                  <InformationTable>
                    <tbody>
                      <tr>
                        <th>Home Page</th>
                        <td>
                          {coinIntro?.links.homepage[0] ? (
                            <a className="box" href={coinIntro?.links.homepage[0]} target="_blank" rel="noreferrer">
                              {coinIntro?.links.homepage[0].split("/")[2]}
                            </a>
                          ) : (
                            "-"
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>White Paper</th>
                        <td>
                          {coinIntro?.links.whitepaper ? (
                            <a className="box" href={coinIntro?.links.whitepaper} target="_blank" rel="noreferrer">
                              {coinIntro?.links.whitepaper.split("/")[2]}
                            </a>
                          ) : (
                            "-"
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>Source Code</th>
                        <td>
                          {coinIntro?.links.repos_url.github[0] ? (
                            <a
                              className="box"
                              href={coinIntro?.links.repos_url.github[0]}
                              target="_blank"
                              rel="noreferrer"
                            >
                              GitHub
                            </a>
                          ) : (
                            "-"
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>Sentiment Survey</th>
                        <td className="sentiment_survey">
                          <span className="up">👍 {coinIntro?.sentiment_votes_up_percentage}%</span>
                          <span className="down">👎 {coinIntro?.sentiment_votes_down_percentage}%</span>
                        </td>
                      </tr>
                    </tbody>
                  </InformationTable>
                </Information>
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
