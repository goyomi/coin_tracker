interface IToggleProps {
  toggleOn: boolean;
  setToggleOn: Function;
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

export interface IOhlc {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
}

export interface IChartQueries {
  "1": UseQueryResult<IOhlc[], unknown>;
  "7": UseQueryResult<IOhlc[], unknown>;
  "30": UseQueryResult<IOhlc[], unknown>;
  "365": UseQueryResult<IOhlc[], unknown>;
}

// utils
export interface IToggleNumber {
  number: number;
  color?: string;
}
