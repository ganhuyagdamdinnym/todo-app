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
import { useDeletedTodo } from "../_contexts/DeletedTodoContext";
import { Refresh } from "../_components/Refresh";
import { TrashButton } from "../_components/trashButtonInDeleted";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "../_components/Toggle";
import { Inprogress } from "../_components/InprogressButton";
export default function Deleted() {
  const { deletedtodos, loading } = useDeletedTodo();
  console.log("deleted", deletedtodos);
  const [selectTeam, setSelectTeam] = useState<string>("Team-1");
  const [titleVal, setTitleval] = useState<string>("");
  const [edithingTodoId, setEdithingTodoId] = useState("");
  const TeamArray = ["Team-1", "Team-2", "Team-3"];

  const HandleMoveToTrash = async () => {};
  if (loading) {
    return <div>This is loading deleted Data</div>;
  }
  // const RemoveTodo = async (title: string) => {
  //   setDeletingTitle(title);
  // };

  return (
    <div>
      <div className="flex items-center h-[70px] gap-2">
        <Inprogress />
        <ModeToggle />
      </div>

      <Card className="mt-4">
        <CardContent className="overflow-hidden w-full items-center">
          <Table className="z-0 w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="felx text-center">№</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="text-center">Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deletedtodos?.map((todo, index) => (
                <TableRow key={index}>
                  <TableCell className="flex gap-4 items-center justify-center">
                    <p className="">{index + 1}</p>
                    <Refresh id={todo._id} title={todo.title} />
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
                    {/* <CheckboxDemo /> */}
                    <button>{todo.status ? "Done" : "Pending"}</button>
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
                    <div className="w-full flex justify-center">
                      {todo?.date}
                    </div>
                    {/* var d = new Date(Date.now());
                      d.toString() */}
                  </TableCell>
                  <TableCell className="flex gap-4 justify-end  items-center">
                    {/* <AlertDialogDemo
                      deletingTodo={deletingTodo}
                      title={todo.title}
                      id={todo._id}
                      RemoveTodo={RemoveTodo}
                      HandleMoveToTrash={HandleMoveToTrash}
                    /> */}
                    <TrashButton id={todo._id} title={todo.title} />
                    <p>Mark as done</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow className="w-full">
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">
                  {deletedtodos?.length}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
