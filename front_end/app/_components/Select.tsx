"use client";
import * as React from "react";
import { useTodo } from "../_contexts/TodoContext";
// import { useTodo } from "../_contexts/TodoContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { title } from "process";
export function SelectDemo() {
  const { todos, setTodos } = useTodo();
  const HandleTodoFilter = (title: string) => {
    alert(`Clicked title: ${title}`);
    const filterData = todos.filter((todo) => todo.title === title);
    setTodos(filterData);
  };
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Title" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Title</SelectLabel>
          {todos.map((todo, index) => (
            // <div
            //   className="w-full"
            //   onClick={() => HandleTodoFilter(todo.title)}
            //   key={index}
            // >
            <SelectItem onClick={() => console.log("hi")} value={todo.title}>
              {todo.title}
            </SelectItem>
            //  </div>
          ))}
          {/* <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
