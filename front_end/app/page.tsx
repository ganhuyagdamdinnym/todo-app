import Image from "next/image";
import { AddTodo } from "./_components/AddTodo";
import { TableDemo } from "./_components/Todos";
import { ModeToggle } from "./_components/Toggle";
import { Search } from "./_components/Search";
import { ButtonDemo } from "./_components/Button";
import { Inprogress } from "./_components/InprogressButton";
import { SelectDemo } from "./_components/Select";
import StatusProvider from "./_contexts/StatusContext";
//mport { HandleToggle } from "./_components/DarkMode";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center p-4 gap-2">
      <StatusProvider>
        <div className="w-full flex justify-between">
          <AddTodo />
          <div style={{ position: "fixed" }} className="flex">
            <SelectDemo />
            {/* <Search /> */}
          </div>
          <div
            style={{ position: "fixed", right: "20px" }}
            className="flex justify-center gap-2"
          >
            <Inprogress />
            <ButtonDemo />

            <ModeToggle />
          </div>
        </div>
        <TableDemo />
      </StatusProvider>
    </div>
  );
}
