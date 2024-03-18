export function fetchCoins() {
  return fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=24h&locale=en&precision=2"
  ).then((response) => response.json());
}
