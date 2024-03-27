import React from "react";
import { IContext } from "../types/coin";

export const CoinDataContext = React.createContext<IContext>({
  data: undefined,
  isLoading: true,
  isError: true,
});
