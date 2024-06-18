import { UserModel } from "@/models/user-model";
import { CreateTodoToUserInput } from "@/graphql/generated/client";
import { TodoModel } from "@/models/todo-model";
import { title } from "process";
import jwt from "jsonwebtoken";
import { TodoTypeDefs } from "../../schema/todo";
export const CreateTodoToUser = async (
  _: CreateTodoToUserInput,
  { input }: { input: CreateTodoToUserInput },
  context: CreateTodoToUserInput
) => {
  const { title, team, token } = input;
  if (!token) {
    return "error";
  } else {
    console.log("hi");
    try {
      const decoded = jwt.verify(token, "SomeSecretKey") as { id: string };
      console.log("keysss", decoded);
      const id = decoded.id;
      //   const todo = { title: title, team: team };
      const newTodo = new TodoModel({
        ...{ title: title, team: team },
        userId: id,
      });
      console.log("new", newTodo);
      const savedTodo = await newTodo.save();
      console.log("save", savedTodo);
      await UserModel.findByIdAndUpdate(
        id,
        { $push: { todos: savedTodo._id } },
        { new: true, useFindAndModify: false }
      );
      //   const user = await UserModel.findByIdAndUpdate(id, {
      //     $push: { todos: todo },
      //   });
      const todos = await TodoModel.find();
      return todos;
    } catch (err) {
      throw err;
    }
  }
  //   try {
  //     const todo = { title: title, team: team };
  //     const user = await UserModel.findByIdAndUpdate(id, {
  //       $push: { todos: todo },
  //     });
  //     console.log("user", user);
  //     return "hi";
  //   } catch (err) {
  //     throw err;
  //   }
};
