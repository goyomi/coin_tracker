function createUrl(BASE_URL: string, path: string, params: Record<string, string>): string {
  const urlParams = new URLSearchParams(params);
  return `${BASE_URL}/${path}?${urlParams}`;
}

export default createUrl;
