"use client";
import { Button } from "@/components/ui/button";
import { useTodo } from "../_contexts/TodoContext";
import axios from "axios";
import { Back_End_url } from "../utils/Back_url";
import { useStatus } from "../_contexts/StatusContext";
export function Inprogress() {
  const { inprogressStatus, setInprogressStatus } = useStatus();

  const { todos, setTodos } = useTodo();
  const handleData = async () => {
    try {
      const url = `${Back_End_url}/api`;
      const res = await axios.get(url);
      console.log(res);
      setTodos(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={() => handleData()}>In progress</Button>;
}
