import { Staatliches } from "next/font/google";
import { connect } from "../../utils/mongoDb";
import { TodoModel } from "@/models/todo-model";

export const GET = async (req: Request) => {
  await connect();
  try {
    const allData = await TodoModel.find();
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
  console.log("post request");
  const { title, team, dateCreate } = await req.json();

  const date = new Date(dateCreate).toString();
  const shortDate = date.split("GMT");
  const newDate = shortDate[0];
  console.log(newDate);
  // const newdate = dateCreate.toString();
  // console.log(newdate);
  await connect();

  try {
    await TodoModel.create({
      title: title,
      team: team,
      date: newDate,
      status: false,
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

export const DELETE = async (req: Request) => {
  console.log("succeed req");
};
