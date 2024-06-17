"use client";
import { Button } from "@/components/ui/button";
import { useTodo } from "../_contexts/TodoContext";
import { useStatus } from "../_contexts/StatusContext";
import { useGetDeletedTodoQueryQuery } from "../generated";
import { useRouter } from "next/navigation";
export function ButtonDemo() {
  const { data, loading, error } = useGetDeletedTodoQueryQuery();
  const { todos, setTodos } = useTodo();
  const router = useRouter();
  const HandleDeletedTodo = async () => {
    router.push("/deleted");
  };
  return (
    <Button onClick={() => HandleDeletedTodo()} variant="secondary">
      Trash
    </Button>
  );
}
