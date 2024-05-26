import ThousandSeparator from "../../utils/thousandSeparator";
import { ICoin } from "../../contexts/Context";
import { ICoinIntro } from "../../pages/CoinDetail";

export const getDetailData = (selectedCoin: ICoin) => {
  return [
    { title: "Market Cap", value: selectedCoin.market_cap },
    { title: "Fully Diluted Valuation", value: selectedCoin?.fully_diluted_valuation },
    { title: "24 Hour Trading Vol", value: selectedCoin.total_volume },
    { title: "Circulating Supply", value: selectedCoin.circulating_supply },
    { title: "Total Supply", value: selectedCoin.total_supply },
    { title: "Max Supply", value: selectedCoin.max_supply },
  ];
};

export const getHistoryData = (selectedCoin: ICoin) => {
  const low24 = ThousandSeparator({ number: selectedCoin?.low_24h });
  const high24 = ThousandSeparator({ number: selectedCoin?.high_24h });
  const ath = ThousandSeparator({ number: selectedCoin?.ath });
  const atl = ThousandSeparator({ number: selectedCoin?.atl });

  return [
    {
      title: "24h Range",
      value: low24,
      value2: high24,
      isItalic: false,
    },
    {
      title: "All-Time High",
      value: ath,
      isItalic: true,
      date: selectedCoin?.ath_date,
    },
    {
      title: "All-Time Low",
      value: atl,
      isItalic: true,
      date: selectedCoin?.atl_date,
    },
  ];
};

export const getInfoData = (coinIntro: ICoinIntro | undefined) => {
  return [
    { title: "Home Page", value: coinIntro?.links.homepage[0] },
    { title: "White Paper", value: coinIntro?.links.whitepaper },
    { title: "Source Code", value: coinIntro?.links.repos_url.github[0], subTitle: "GitHub" },
  ];
};
