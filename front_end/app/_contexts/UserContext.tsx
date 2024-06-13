"use client";
import { useContext, createContext, useState } from "react";
import { ReactNode } from "react";
import { UserType } from "@/lib/todoTypes";
type Props = {
  children: ReactNode;
};
type contextType = {
  user: UserType[];
  setUser: (todos: UserType[]) => void;
};
const UserContext = createContext({} as contextType);
export const useUser = () => {
  return useContext(UserContext);
};
const userContext = (props: Props) => {
  const [user, setUser] = useState<UserType[]>([]);
  const { children } = props;
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default userContext;
