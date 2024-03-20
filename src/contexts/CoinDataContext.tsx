import React from "react";
import { ICoin } from "../types/coin";

export const CoinDataContext = React.createContext<ICoin[] | null>(null);
