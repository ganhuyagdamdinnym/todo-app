import { connect } from "../../utils/mongoDb";
import { TodoModel } from "@/models/todo-model";

export const POST = async (req: Request) => {
  const { title, id, team } = await req.json();
  await connect();
  console.log("edith", id);
  try {
    await TodoModel.findByIdAndUpdate(id, {
      title: title,
      team: team,
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
