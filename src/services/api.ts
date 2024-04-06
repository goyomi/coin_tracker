const BASE_URL = `https://api.coingecko.com/api/v3/coins`;

export async function fetchCoins() {
  return await (
    await fetch(
      `${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en`
    )
  ).json();
}

export async function ohlc(coinId: string, days: number) {
  return await (await fetch(`${BASE_URL}/${coinId}/ohlc?vs_currency=usd&days=${days}`)).json();
}

export async function introCoin(coinId: string) {
  return await (
    await fetch(
      `${BASE_URL}/${coinId}?tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
    )
  ).json();
}
