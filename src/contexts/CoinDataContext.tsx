import { createContext } from "react";
import { IContext } from "../types/type";

export const CoinDataContext = createContext<IContext>({
  data: [],
  isLoading: false,
  isError: false,
});
