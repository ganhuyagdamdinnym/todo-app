"use client";
import { Input } from "@/components/ui/input";
import { ButtonLogin } from "../_components/LoginButton";
import { useState } from "react";
import { ButtonSignUp } from "../_components/SignUpButton";
import { Value } from "@radix-ui/react-select";
import { useToken } from "../_contexts/TokenContext";
export default function Login() {
  const [isClickSignUp, setisClickSignUp] = useState<boolean>(false);
  const [emailVal, setEmailVal] = useState<string>("");
  const [nameVal, setNamelVal] = useState<string>("");
  const [PassVal, setPassVal] = useState<string>("");

  const [loginEmailVal, setLoginEmailVal] = useState<string>("");
  const [loginPass, setLoginPass] = useState<string>("");

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="h-[400px] w-[300px] flex flex-col justify-center items-center gap-4 border-2 border-black rounded-2xl px-4">
        <div className="text-[15px]">
          <button
            className="text-[20px]"
            onClick={() => setisClickSignUp(false)}
          >
            Login
          </button>{" "}
          or{" "}
          <button
            className="text-[20px]"
            onClick={() => setisClickSignUp(true)}
          >
            SignUp
          </button>
        </div>
        {isClickSignUp ? (
          <div className="w-full flex flex-col py-2 gap-2">
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmailVal(e.target.value)}
              value={emailVal}
            />
            <Input
              placeholder="Name"
              onChange={(e) => setNamelVal(e.target.value)}
              value={nameVal}
            />
            <Input
              placeholder="Password"
              onChange={(e) => setPassVal(e.target.value)}
              value={PassVal}
            />
            <ButtonSignUp email={emailVal} name={nameVal} pass={PassVal} />
          </div>
        ) : (
          <div className="w-full flex flex-col py-2 gap-2">
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => setLoginEmailVal(e.target.value)}
              value={loginEmailVal}
            />
            <Input
              placeholder="Password"
              onChange={(e) => setLoginPass(e.target.value)}
            />
            <ButtonLogin pass={loginPass} email={loginEmailVal} />
          </div>
        )}
      </div>
    </div>
  );
}
