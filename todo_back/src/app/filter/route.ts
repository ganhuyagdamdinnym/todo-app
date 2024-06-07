import { connect } from "@/utils/mongoDb";
import { TodoModel } from "@/models/todo-model";

export const POST = async (req: Request) => {
  const { title } = await req.json();
  try {
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
