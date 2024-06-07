"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { useTodo } from "../_contexts/TodoContext";
import { useAdvice } from "../_contexts/AdviceContext";
import axios from "axios";
import { Back_End_url } from "../utils/Back_url";
import { CheckboxDemo } from "./CheckButton";
import { AlertDialogDemo } from "./_Alert";
import { useStatus } from "../_contexts/StatusContext";

export function TableDemo() {
  //const { advice, setAdvice, adviceStatus, setAdviceStatus } = useAdvice();
  //console.log("adviiiice", advice);
  const { todos, setTodos, Fetch } = useTodo();
  const { inprogressStatus, setInprogressStatus } = useStatus();
  const [deletingTitle, setDeletingTitle] = useState<string>("");

  useState<boolean>(false);
  const [deletingTodo, setDeletingTodo] = useState<string>("");

  const RemoveTodo = async (title: string) => {
    setDeletingTodo(title);
    setDeletingTitle(title);
    console.log(inprogressStatus);
  };

  const HandleMoveToTrash = async () => {
    console.log(inprogressStatus);
    if (inprogressStatus == true) {
      try {
        const res = await fetch("http://localhost:8080/util", {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: deletingTitle }),
        }).then(function (res) {
          Fetch();
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await fetch(`${Back_End_url}/deletedTodo`, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: deletingTitle }),
        }).then(function async(res) {});
      } catch (err) {
        console.log(err);
      }
      try {
        const url = `${Back_End_url}/deletedTodo`;
        const res = await axios.get(url);
        console.log(res);
        setTodos(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const HandleStatus = async (title: string) => {
    try {
      const res = await fetch("http://localhost:8080/status", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title }),
      }).then(function (res) {
        Fetch();
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className="mt-4">
      <CardContent className="overflow-hidden w-full items-center">
        <Table className="z-0">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Title</TableHead>
              <TableHead className="w-[150px]">Status</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="w-[150px] flex justify-center items-center">
                Date
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.map((todo, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{todo.title}</TableCell>
                <TableCell className="flex">
                  <CheckboxDemo />
                  <button onClick={() => HandleStatus(todo._id)}>
                    {todo.status ? "Done" : "Pending"}
                  </button>
                </TableCell>
                <TableCell>{todo.team}</TableCell>
                <TableCell>
                  <div className="w-full flex justify-center">{todo?.date}</div>
                  {/* var d = new Date(Date.now());
                    d.toString() */}
                </TableCell>
                <TableCell className="flex gap-4 justify-end w-[200px] items-center">
                  <AlertDialogDemo
                    deletingTodo={deletingTodo}
                    title={todo.title}
                    id={todo._id}
                    RemoveTodo={RemoveTodo}
                    HandleMoveToTrash={HandleMoveToTrash}
                  />
                  {/* <img src="trash2.png" /> */}
                  <p>Mark as done</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="w-[1000px]">
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{todos.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
