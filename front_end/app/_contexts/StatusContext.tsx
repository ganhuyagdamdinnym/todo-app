"use client";
import { useState, createContext, useContext } from "react";
import { ReactNode } from "react";
type contextType = {
  inprogressStatus: boolean;
  setInprogressStatus: (inprogressStatus: boolean) => void;
};
type Props = {
  children: ReactNode;
};
const statusContext = createContext({} as contextType);
export const useStatus = () => {
  return useContext(statusContext);
};
const StatusContext = (props: Props) => {
  const { children } = props;
  const [inprogressStatus, setInprogressStatus] = useState<boolean>(true);
  return (
    <statusContext.Provider value={{ inprogressStatus, setInprogressStatus }}>
      {children}
    </statusContext.Provider>
  );
};
export default StatusContext;
