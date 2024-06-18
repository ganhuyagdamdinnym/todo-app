"use client";
import { Button } from "@/components/ui/button";
import { useTodo } from "../_contexts/TodoContext";
import axios from "axios";
import { Back_End_url } from "../utils/Back_url";
import { useStatus } from "../_contexts/StatusContext";
import { useToken } from "../_contexts/TokenContext";
import { useRouter } from "next/navigation";
import { useLoginUserMutation } from "../generated";
type PropsType = {
  loginEmail: string;
  loginPass: string;
};
export function ButtonLogin(props: PropsType) {
  const [loginUser, { data }] = useLoginUserMutation();
  const { loginEmail, loginPass } = props;
  const router = useRouter();
  const HandleLogin = async () => {
    const inputUser = { email: loginEmail, pass: loginPass };
    try {
      await loginUser({ variables: { input: inputUser } }).then((res) => {
        console.log(data);
        if (data && data.loginUser) {
          localStorage.setItem("token", data?.loginUser);
          router.push("/");
        }
      });
    } catch (err) {}
  };
  return (
    <Button onClick={() => HandleLogin()} variant="secondary">
      Login
    </Button>
  );
}
