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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import { Refresh } from "./Refresh";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function TableDemo() {
  //const { advice, setAdvice, adviceStatus, setAdviceStatus } = useAdvice();
  //console.log("adviiiice", advice);
  const { todos, setTodos, Fetch } = useTodo();
  const { inprogressStatus, setInprogressStatus } = useStatus();
  const [deletingTitle, setDeletingTitle] = useState<string>("");
  const [isClickEdithButon, setisClickEdithButton] = useState<boolean>(false);
  const [selectTeam, setSelectTeam] = useState<string>("Team-1");
  const [titleVal, setTitleval] = useState<string>("");
  const TeamArray = ["Team-1", "Team-2", "Team-3"];

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
  const HandleEdith = async (id: string, title: string, selectTeam: string) => {
    if (isClickEdithButon == false) {
      setisClickEdithButton(!isClickEdithButon);
      console.log(id);
      setTitleval(title);
    } else {
      try {
        const res = await fetch(`${Back_End_url}/edith`, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: titleVal, id: id, team: selectTeam }),
        }).then(function (res) {
          Fetch();
        });
      } catch (err) {
        console.log(err);
      }
      console.log(isClickEdithButon);
      setisClickEdithButton(false);
    }
  };

  return (
    <Card className="mt-4">
      <CardContent className="overflow-hidden w-full items-center">
        <Table className="z-0 w-full">
          <TableHeader>
            <TableRow>
              <TableHead>№</TableHead>
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
                <TableCell className="flex gap-4 items-center justify-center">
                  <p className="">{index + 1}</p>
                  {inprogressStatus ? (
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      style={{
                        fontSize: "20px",
                      }}
                      onClick={() =>
                        HandleEdith(todo._id, todo.title, selectTeam)
                      }
                    />
                  ) : (
                    <Refresh id={todo._id} />
                  )}
                </TableCell>
                <TableCell className="font-medium">
                  {isClickEdithButon ? (
                    <Input
                      className="h-[30px]"
                      onChange={(e) => setTitleval(e.target.value)}
                      value={titleVal}
                    />
                  ) : (
                    <p>{todo.title}</p>
                  )}
                </TableCell>
                <TableCell className="flex">
                  <CheckboxDemo />
                  <button onClick={() => HandleStatus(todo._id)}>
                    {todo.status ? "Done" : "Pending"}
                  </button>
                </TableCell>
                <TableCell>
                  {isClickEdithButon ? (
                    <select
                      onChange={(e) => setSelectTeam(e.target.value)}
                      value={selectTeam}
                      className="border-[1px] px-2 py-1 rounded-xl w-[100px]"
                    >
                      {TeamArray.map((e) => (
                        <option value={e}>{e}</option>
                      ))}
                    </select>
                  ) : (
                    <p> {todo.team}</p>
                  )}
                </TableCell>
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
            <TableRow className="w-full">
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{todos.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
