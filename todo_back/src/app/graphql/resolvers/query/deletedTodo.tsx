import { DeletedModel } from "@/models/todo-delete";

export const getDeletedTodo = async () => {
  try {
    const allData = await DeletedModel.find();
    // console.log(allData);
    return allData;
  } catch (error) {
    console.log(error);
  }
};
