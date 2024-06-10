"use client";
import { useState } from "react";
import { useTodo } from "../_contexts/TodoContext";
import { useAdvice } from "../_contexts/AdviceContext";
import { TodoType } from "@/lib/todoTypes";
import axios from "axios";
import { title } from "process";
import { Back_End_url } from "../utils/Back_url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddTodo = () => {
  const { todos, setTodos, Fetch } = useTodo();
  const { advice, setAdvice, adviceStatus, setAdviceStatus } = useAdvice();
  const [status, setStatus] = useState<number>(0);
  const [selectTeam, setSelectTeam] = useState<string>("Team-1");
  const [titleVal, setTitleval] = useState<string>("");
  const TeamArray = ["Team-1", "Team-2", "Team-3"];
  const notify = () => toast("Wow so easy!");
  const HandleAdd = async () => {
    toast("Creating todo!");
    const date = Date.now();
    console.log(date);
    todos.filter(async (todo) => {
      if (todo.title == titleVal) {
        setStatus(1);
      } else {
      }
    });
    try {
      const res = await fetch(`${Back_End_url}/api`, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: titleVal,
          team: selectTeam,
          dateCreate: date,
        }),
      }).then(function (res) {
        Fetch();
        setTitleval("");
      });
      // setStatus(0);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex gap-2 max-w-[700px] m-auto ">
      {/* <div className="w-4 h-4 bg-[red]" onClick={() => ref()}></div> */}
      <input
        className="w-[525px] border-[1px] rounded-xl px-2"
        onChange={(e) => setTitleval(e.target.value)}
        value={titleVal}
      />
      <button
        // variant={"outline"}
        onClick={() => HandleAdd()}
        className="border-[1px] px-2 py-1 rounded-xl"
      >
        Add
      </button>
      <select
        onChange={(e) => setSelectTeam(e.target.value)}
        value={selectTeam}
        className="border-[1px] px-2 py-1 rounded-xl w-[100px]"
      >
        {TeamArray.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
      <ToastContainer />
    </div>
  );
};
