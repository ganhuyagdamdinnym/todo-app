"use client";
import { useState, createContext, useContext } from "react";
import { ReactNode } from "react";
type contextType = {
  advice: string;
  setAdvice: (advice: string) => void;
  adviceStatus: boolean;
  setAdviceStatus: (advice: boolean) => void;
};
type Props = {
  children: ReactNode;
};
const adviceContext = createContext({} as contextType);
export const useAdvice = () => {
  return useContext(adviceContext);
};
const AdviceContext = (props: Props) => {
  const { children } = props;
  const [adviceStatus, setAdviceStatus] = useState<boolean>(false);
  const [advice, setAdvice] = useState<string>("");
  return (
    <adviceContext.Provider
      value={{ adviceStatus, setAdviceStatus, advice, setAdvice }}
    >
      {children}
    </adviceContext.Provider>
  );
};
export default AdviceContext;
