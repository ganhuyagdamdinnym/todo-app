export type TodoType = {
  _id: string;
  title: string;
  status: boolean;
  team: string;
  Action: string;
  date: string;
};

type userTodosType = {
  _id: String;
  title: String;
  status: Boolean;
  team: String;
  date: String;
};
export type UserType = {
  password: string;
  name: string;
  email: string;
  todos: userTodosType;
};
