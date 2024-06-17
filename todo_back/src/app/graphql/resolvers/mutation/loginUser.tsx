import { UserModel } from "@/models/user-model";
import jwt from "jsonwebtoken";
export const signUpUser = async (
  _: any,
  { input }: { input: any },
  context: any
) => {
  const { email, name, pass } = input;
  console.log("title", email, name, pass);
  console.log(name);
  console.log(pass);
  try {
    const token = jwt.sign({ id: userData._id }, "SomeSecretKey", {
      expiresIn: "4h",
    });
    return token;
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
