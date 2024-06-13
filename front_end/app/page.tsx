"use client";
import Image from "next/image";
import { AddTodo } from "./_components/AddTodo";
import { TableDemo } from "./_components/Todos";
import { ModeToggle } from "./_components/Toggle";
import { Search } from "./_components/Search";
import { ButtonDemo } from "./_components/Button";
import { Inprogress } from "./_components/InprogressButton";
import { SelectDemo } from "./_components/Select";
import StatusProvider from "./_contexts/StatusContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import TokenProvider from "./_contexts/TokenContext";
import { PublicButton } from "./_components/PublicButton";
import { ProvideButton } from "./_components/PrivadeButton";
//mport { HandleToggle } from "./_components/DarkMode";
export default function Home() {
  const [isLogin, setLogin] = useState<boolean>(false);
  const notify = () => toast("Wow so easy!");
  return (
    <TokenProvider>
      <div className="w-screen h-screen flex flex-col items-center p-4 gap-2">
        <StatusProvider>
          <div className="w-full flex justify-between">
            <AddTodo />
            <div style={{ position: "fixed" }} className="flex gap-2">
              <SelectDemo />
              <PublicButton />
              <ProvideButton />
              {/* <Search /> */}
            </div>
            <div
              style={{ position: "fixed", right: "20px" }}
              className="flex justify-center gap-2"
            >
              <Inprogress />
              <ButtonDemo />
              <ToastContainer />
              <ModeToggle />
            </div>
          </div>
          <TableDemo />
        </StatusProvider>
      </div>
    </TokenProvider>
  );
}
