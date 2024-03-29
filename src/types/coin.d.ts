export interface IContext {
  data: ICoin[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error?: unknown;
}

// coins
export interface ICoin {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_24h_in_currency: number;
  roi: null;
  symbol: string;
  total_supply: number;
  total_volume: number;
  price_change_percentage_1h_in_currency?: number;
  price_change_percentage_24h_in_currency?: number;
  price_change_percentage_7d_in_currency?: number;
  price_change_percentage_30d_in_currency?: number;
}

// coin
export interface IParams {
  coinId: string;
}
export interface ICoinIntro {
  description: {
    en: string;
  };
}
export interface IChartQueries {
  "1": UseQueryResult<IOhlc[], unknown>;
  "7": UseQueryResult<IOhlc[], unknown>;
  "30": UseQueryResult<IOhlc[], unknown>;
  "365": UseQueryResult<IOhlc[], unknown>;
}

// chart
interface IOhlc {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
}
interface IChart {
  selectedCoin: ICoin | undefined;
  queries: IChartQueries;
}

// timebar
export interface ITimes {
  times: { [key: string]: string };
  setDays?: Function;
  setTime?: Function;
}

// utils
export interface IFormateNumber {
  number: number;
  currencyCode?: string;
}
export interface IToggleNumber {
  number: number;
  color?: string;
}
export interface IThousandSeparator {
  number?: number;
}
