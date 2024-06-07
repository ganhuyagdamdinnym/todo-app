"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useTodo } from "../_contexts/TodoContext";
import { useState } from "react";
export function CheckboxDemo() {
  const { todos, setTodos, Fetch } = useTodo();
  // const handleCheckButton = async () => {
  //   try {
  //     const res = await fetch("http://localhost:8080/util", {
  //       method: "POST",
  //       mode: "no-cors",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ title:  }),
  //     }).then(function (res) {
  //       Fetch();
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   };
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      ></label>
    </div>
  );
}
