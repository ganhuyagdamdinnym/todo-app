"use client";
import { AddTodoForUser } from "../_components/AddTodoForUser";
import { TodosForUser } from "../_components/TodosForUser";
import { useEffect } from "react";
import { PublicButton } from "../_components/PublicButton";
import { useUserTodo } from "../_contexts/UserTodoContext";
// import { useGetTodoFromUserMutation } from "../generated";
export default function privadeTodo() {
  const { name } = useUserTodo();
  // const [getUserInfo, { data }] = useGetTodoFromUserMutation();
  // const getData = async () => {
  //   const token = {
  //     token: localStorage.getItem("token"),
  //   };
  //   try {
  //     await getUserInfo({
  //       variables: { input: token },
  //     }).then((res) => {
  //       console.log("userData", res);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, [data]);
  return (
    <div className="py-2">
      <div
        style={{ position: "fixed", left: "10px" }}
        className="flex gap-2 items-center"
      >
        <PublicButton />
        <div>{name}</div>
      </div>
      <AddTodoForUser />
      <TodosForUser />
    </div>
  );
}
