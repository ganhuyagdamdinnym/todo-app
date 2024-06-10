import { connect } from "../../utils/mongoDb";
import { TodoModel } from "@/models/todo-model";
import { DeletedModel } from "@/models/todo-delete";
import { title } from "process";
export const POST = async (req: Request) => {
  const { id } = await req.json();
  await connect();
  console.log("edith", id);
  try {
    const todo = await DeletedModel.findByIdAndDelete(id);
    console.log(todo);
    await TodoModel.create({
      title: todo.title,
      team: todo.team,
      status: false,
      date: todo.date,
    });
    return Response.json(
      { message: "succeed" },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type,Authorization",
        },
      }
    );
  } catch {
    return Response.json(
      { message: "succeed" },
      {
        status: 404,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type,Authorization",
        },
      }
    );
  }
};
