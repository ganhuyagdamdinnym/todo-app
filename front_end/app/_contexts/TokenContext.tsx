"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
type contextType = {
  token: string;
  setToken: (token: any) => void;
};
type Props = {
  children: ReactNode;
};
const TokenContext = createContext({} as contextType);
export const useToken = () => {
  return useContext(TokenContext);
};
const tokenContext = (props: Props) => {
  const router = useRouter();
  const checkToken = () => {
    // window /main tai tentskue
    const LocalToken = localStorage.getItem("token");
    if (!LocalToken) {
      router.push("/login");
    }
  };
  const { children } = props;
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
export default tokenContext;
