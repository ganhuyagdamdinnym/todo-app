"use client";

import { AddTodo } from "./_components/AddTodo";
import { TableDemo } from "./_components/Todos";
import { ModeToggle } from "./_components/Toggle";
import { ButtonDemo } from "./_components/Button";
import { Inprogress } from "./_components/InprogressButton";
import { SelectDemo } from "./_components/Select";
import StatusProvider from "./_contexts/StatusContext";
import { ToastContainer, toast } from "react-toastify";
import TokenProvider from "./_contexts/TokenContext";
import { PublicButton } from "./_components/PublicButton";
import { ProvideButton } from "./_components/PrivadeButton";
import { useGetTodoQueryQuery } from "./generated";
import { useUserTodo } from "./_contexts/UserTodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const { data, loading, error } = useGetTodoQueryQuery();
  const { name } = useUserTodo();
  if (loading) {
    return <div>This is loading</div>;
  }
  if (!loading) {
    return (
      <TokenProvider>
        <div className="w-screen h-screen flex flex-col items-center p-4 gap-2">
          <StatusProvider>
            <div className="w-full flex justify-between">
              <AddTodo />
              <div style={{ position: "fixed" }} className="flex gap-2">
                <SelectDemo />
                {/* <PublicButton /> */}
                <ProvideButton />
              </div>
              <div
                style={{ position: "fixed", right: "20px" }}
                className="flex justify-center gap-2 items-center"
              >
                <div className="flex gap-2 justify-center items-center">
                  <FontAwesomeIcon icon={faUser} />
                  {name}
                </div>
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
}
