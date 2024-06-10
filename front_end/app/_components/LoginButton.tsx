"use client";
import { Button } from "@/components/ui/button";
import { useTodo } from "../_contexts/TodoContext";
import axios from "axios";
import { Back_End_url } from "../utils/Back_url";
import { useStatus } from "../_contexts/StatusContext";
import { useToken } from "../_contexts/TokenContext";
type PropsType = {
  email: string;
  pass: string;
};
export function ButtonLogin(props: PropsType) {
  const { email, pass } = props;
  const { token, setToken } = useToken();
  const HandleLogin = async () => {
    try {
      const res = await axios.post(`${Back_End_url}/login`, {
        email: email,
        pass: pass,
      });
      console.log(res);
      setToken(res.data.token);
    } catch (err) {}
    console.log(email);
  };
  return (
    <Button onClick={() => HandleLogin()} variant="secondary">
      Login
    </Button>
  );
}
