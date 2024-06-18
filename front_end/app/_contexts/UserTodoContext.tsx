"use client";

import { UserType } from "@/lib/todoTypes";
import { TodoType } from "@/lib/todoTypes";
import axios from "axios";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Back_End_url } from "../utils/Back_url";
import { useGetTodoQueryQuery } from "../generated";
import { useGetTodoFromUserQuery } from "../generated";
import { ApolloQueryResult } from "@apollo/client";
import { Token } from "graphql";
// const { data, loading, error } = useGetTodoQueryQuery();
// if (loading) {
//   return <div>This is loading</div>;
// }

// if (!loading) {
//   return <div style={{ color: "white", fontSize: "40px" }}>hi</div>;
// }
type Props = {
  children: ReactNode;
};
type contextType = {
  userTodos: TodoType[];
  setUserTodos: (todos: any) => void;
  name: String;

  //   loading: boolean;
  //   error: any;
  refetch: (variables?: Partial<any>) => Promise<ApolloQueryResult<any>>;
};
const userTodoContext = createContext({} as contextType);
export const useUserTodo = () => {
  return useContext(userTodoContext);
};
//wrap component gaduurn oroodog
const UserTodoProvider = (props: Props) => {
  const [userTodos, setUserTodos] = useState<TodoType[]>([]);
  const token = localStorage.getItem("token");
  //console.log("token", token);
  const { data, loading, error, refetch } = useGetTodoFromUserQuery({
    variables: {
      input: {
        token: token,
      },
    },
  });
  console.log("queryDataUser", data?.getTodoFromUser?.[0]?.name);
  const name = data?.getTodoFromUser?.[0]?.name as String;
  const { children } = props;

  useEffect(() => {
    if (data && data.getTodoFromUser) {
      setUserTodos(data.getTodoFromUser?.[0]?.todos as TodoType[]);
    }
  }, [data]);

  return (
    <userTodoContext.Provider
      value={{ userTodos, name, setUserTodos, refetch }}
    >
      {children}
    </userTodoContext.Provider>
  );
};
export default UserTodoProvider;
