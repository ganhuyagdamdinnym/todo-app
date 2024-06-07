import { connect } from "../../utils/mongoDb";
import { TodoModel } from "@/models/todo-model";
import { DeletedModel } from "@/models/todo-delete";

export const GET = async (req: Request) => {
  await connect();
  try {
    const allData = await DeletedModel.find();
    // console.log(allData);
    return Response.json(allData, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
      },
    });
  } catch (error) {
    console.log(error);
  }
  // console.log("hello");
  // //res.status(200);
  // console.log("huselt orj irlee");
  // return Response.json({ message: "hihi" });
  return Response.json({ message: "failed" });
};

export const POST = async (req: Request) => {
  console.log("delete request");
  const { title } = await req.json();
  console.log(title);
  await connect();
  try {
    const deletedTodo = await DeletedModel.findOneAndDelete({ _id: title });
    console.log("this is console", deletedTodo);
    // console.log("ss", deletedTodo.title);

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
