import { createContext } from "react";
import { IContext } from "../types/coin";

export const CoinDataContext = createContext<IContext>({
  data: [],
  isLoading: false,
  isError: false,
});
