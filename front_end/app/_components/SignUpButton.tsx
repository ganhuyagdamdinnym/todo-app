"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useTodo } from "../_contexts/TodoContext";
import { Back_End_url } from "../utils/Back_url";
import { useStatus } from "../_contexts/StatusContext";
type PropsType = {
  email: string;
  name: string;
  pass: string;
};
export function ButtonSignUp(props: PropsType) {
  const { email, name, pass } = props;
  //   const { todos, setTodos } = useTodo();
  //   const { inprogressStatus, setInprogressStatus } = useStatus();
  const HandleSignup = async () => {
    console.log(email);
    try {
      const res = await axios.post(`${Back_End_url}/signUp`, {
        email: email,
        name: name,
        pass: pass,
      });
      // setStatus(0);
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
