import { TodoModel } from "@/models/todo-model";
import { DeleteId } from "@/graphql/generated/client";
export const deleteTodo = async (
  _: any,
  { input }: { input: DeleteId },
  context: any
) => {
  const { id } = input;
  try {
    const deleteTodo = await TodoModel.findByIdAndDelete(id);
    console.log("deklete", deleteTodo);
    if (deleteTodo == null) {
      return "heregle";
    }
    return deleteTodo;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
