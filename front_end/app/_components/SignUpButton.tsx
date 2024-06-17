"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Back_End_url } from "../utils/Back_url";
import { useSignUpUserMutation } from "../generated";

type PropsType = {
  email: string;
  name: string;
  pass: string;
};
export function ButtonSignUp(props: PropsType) {
  const [signUp, { data }] = useSignUpUserMutation();
  const { email, name, pass } = props;
  //   const { todos, setTodos } = useTodo();
  //   const { inprogressStatus, setInprogressStatus } = useStatus();
  const HandleSignup = async () => {
    console.log(email);
    const signUpInput = {
      email: email,
      name: name,
      pass: pass,
    };
    try {
      await signUp({ variables: { input: signUpInput } });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Button onClick={() => HandleSignup()} variant="secondary">
      Sign Up
    </Button>
  );
}
// method: "POST",
// mode: "no-cors",
// headers: { "Content-Type": "application/json" },
// body: JSON.stringify({
//   email: email,
//   name: name,
//   pass: pass,
// }),
// }).then(function (res) {});
