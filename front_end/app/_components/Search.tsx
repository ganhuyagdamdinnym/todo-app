"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useTodo } from "../_contexts/TodoContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Search() {
  const { todos, setTodos } = useTodo();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const HandleSelectTodo = (title: string) => {
    alert("hi");
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? todos.find((todo) => todo.title === value)?.title
            : "Search title..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search title..." />
          <CommandList>
            <CommandEmpty>No title found.</CommandEmpty>
            <CommandGroup>
              {todos.map((todo, index) => (
                <CommandItem
                  onClick={() => HandleSelectTodo(todo.title)}
                  key={index}
                  value={todo.title}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === todo.title ? "opacity-100" : "opacity-0"
                    )}
                    onClick={() => HandleSelectTodo(todo.title)}
                  />
                  {todo.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
