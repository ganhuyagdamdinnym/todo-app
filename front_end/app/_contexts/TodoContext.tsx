"use client";
import { invoices } from "@/lib/myTodo";
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
type Props = {
  children: ReactNode;
};
type contextType = {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
  Fetch: () => Promise<void>;
};
const todoContext = createContext({} as contextType);
export const useTodo = () => {
  return useContext(todoContext);
};
//wrap component gaduurn oroodog
const TodoProvider = (props: Props) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const { children } = props;
  const Fetch = async () => {
    try {
      const url = `${Back_End_url}/api`;
      const res = await axios.get(url);
      console.log(res);
      setTodos(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //setTodos(invoices);
    Fetch();
  }, []);
  return (
    <todoContext.Provider value={{ todos, setTodos, Fetch }}>
      {children}
    </todoContext.Provider>
  );
};
export default TodoProvider;
