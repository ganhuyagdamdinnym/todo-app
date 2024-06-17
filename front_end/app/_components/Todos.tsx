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
import { useState } from "react";
import { useTodo } from "../_contexts/TodoContext";
import { CheckboxDemo } from "./CheckButton";
import { AlertDialogDemo } from "./_Alert";
import { useStatus } from "../_contexts/StatusContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import { Refresh } from "./Refresh";
import { useEdithMutationMutation } from "../generated";

export function TableDemo() {
  const { todos, refetch } = useTodo();
  const { inprogressStatus, setInprogressStatus } = useStatus();
  const [deletingTitle, setDeletingTitle] = useState<string>("");
  const [isClickEdithButon, setisClickEdithButton] = useState<boolean>(false);
  const [selectTeam, setSelectTeam] = useState<string>("Team-1");
  const [titleVal, setTitleval] = useState<string>("");
  const [edithingTodoId, setEdithingTodoId] = useState("");
  const TeamArray = ["Team-1", "Team-2", "Team-3"];
  const [edithTodoMutation, { data, loading, error }] =
    useEdithMutationMutation();

  const RemoveTodo = async (title: string) => {
    setDeletingTitle(title);
    console.log(inprogressStatus);
  };

  const HandleStatus = async (title: string) => {
    try {
      const res = await fetch("http://localhost:8080/status", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title }),
      }).then(function (res) {
        // Fetch();
      });
    } catch (err) {
      console.log(err);
    }
  };
  const HandleEdith = async (id: string) => {
    if (isClickEdithButon == false) {
      setisClickEdithButton(!isClickEdithButon);
      console.log(id);
      setEdithingTodoId(id);
    } else {
      const todoInput = {
        id: id,
        title: titleVal,
        team: selectTeam,
        // date: new Date().toISOString(),
      };
      setisClickEdithButton(false);
      try {
        await edithTodoMutation({
          variables: { input: todoInput },
        }).then((res) => {
          refetch();
        });
      } catch (err) {
        console.log(err);
      }
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

                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{
                      fontSize: "20px",
                    }}
                    onClick={() => HandleEdith(todo._id)}
                  />
                </TableCell>
                <TableCell className="font-medium">
                  {edithingTodoId == todo._id ? (
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
                  {edithingTodoId == todo._id ? (
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
                    title={todo.title}
                    id={todo._id}
                    RemoveTodo={RemoveTodo}
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
