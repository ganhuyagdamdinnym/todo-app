import { UserModel } from "@/models/user-model";
// import{ }
import { InputSignUp } from "@/graphql/generated/client";
import bcrypt from "bcrypt";
export const signUpUser = async (
  _: any,
  { input }: { input: InputSignUp },
  context: any
) => {
  const { email, name, pass } = input;
  //   const date = new Date(dateCreate).toString();
  //   const shortDate = date.split("GMT");
  //   const newDate = shortDate[0];
  //   console.log(newDate);
  console.log("title", email);
  try {
    const hashedPass = bcrypt.hash(pass, 10);
    const user = await UserModel.create({
      email: email,
      name: name,
      password: hashedPass,
    });
    return user;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};
