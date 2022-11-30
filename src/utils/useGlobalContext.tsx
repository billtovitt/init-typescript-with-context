import { createContext, useContext } from "react";
import { GlobalContextProps } from "types/context";

export const GlobalContext = createContext<GlobalContextProps>({
  data: "data",
  setData: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
