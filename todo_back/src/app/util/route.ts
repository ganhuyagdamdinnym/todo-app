import { connect } from "../../utils/mongoDb";
import { TodoModel } from "@/models/todo-model";
import { DeletedModel } from "@/models/todo-delete";
import { Tienne } from "next/font/google";
export const POST = async (req: Request) => {
  console.log("delete request");
  const { title } = await req.json();
  console.log(title);
  await connect();
  try {
    const deletedTodo = await TodoModel.findOneAndDelete({ _id: title });
    console.log("this is console", deletedTodo);
    // console.log("ss", deletedTodo.title);
    await DeletedModel.create({
      title: deletedTodo.title,
      team: deletedTodo.team,
      status: true,
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
  } catch (err) {
    console.log(err);
    return Response.json(
      { message: err },
      {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type,Authorization",
        },
      }
    );
  }
};
