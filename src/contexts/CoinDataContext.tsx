import { createContext } from "react";
import { ICoin } from "../types/type";

interface IContext {
  data: ICoin[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error?: unknown;
}

export const CoinDataContext = createContext<IContext>({
  data: [],
  isLoading: false,
  isError: false,
});
