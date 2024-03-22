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
}

// coin
export interface IParams {
  coinId: string;
}
export interface ICoinIntro {
  description: {
    ko: string;
  };
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

// chart
interface IOhlc {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
}
