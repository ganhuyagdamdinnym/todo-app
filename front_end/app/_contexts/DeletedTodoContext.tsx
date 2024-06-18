"use client";

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
import { ApolloQueryResult } from "@apollo/client";
import { useGetDeletedTodoQueryQuery } from "../generated";
// const { data, loading, error } = useGetTodoQueryQuery();
// if (loading) {
//   return <div>This is loading</div>;
// }

// if (!loading) {
//   return <div style={{ color: "white", fontSize: "40px" }}>hi</div>;
// } bugd novsh
type Props = {
  children: ReactNode;
};
type contextType = {
  deletedtodos: TodoType[];
  setDeletedTodos: (deletedtodos: any) => void;
  loading: boolean;
  error: any;
  fetch: () => void;
  refetch: (variables?: Partial<any>) => Promise<ApolloQueryResult<any>>;
};
const deletedTodoContext = createContext({} as contextType);
export const useDeletedTodo = () => {
  return useContext(deletedTodoContext);
};
//wrap component gaduurn oroodog
const DeletedTodoProvider = (props: Props) => {
  // const [todos, setTodos] = useState<TodoType[]>([]);
  const { data, loading, error, refetch } = useGetDeletedTodoQueryQuery();
  console.log("queryData", data);
  //const todos = data?.todoQuery as TodoType[];
  const { children } = props;
  const [deletedtodos, setDeletedTodos] = useState<TodoType[]>([]);
  const fetch = () => {
    refetch();
  };
  useEffect(() => {
    fetch();
    if (data && data.getDeletedTodo) {
      setDeletedTodos(data.getDeletedTodo as TodoType[]);
    }
  }, [data]);

  return (
    <deletedTodoContext.Provider
      value={{ deletedtodos, setDeletedTodos, loading, error, fetch, refetch }}
    >
      {children}
    </deletedTodoContext.Provider>
  );
};
export default DeletedTodoProvider;
