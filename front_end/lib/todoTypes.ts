export type TodoType = {
  _id: string;
  title: string;
  status: boolean;
  team: string;
  Action: string;
  date: string;
};

type userTodosType = {
  title: String;
  status: Boolean;
  team: String;
  Action: String;
  date: String;
};
export type UserType = {
  _id: string;
  password: string;
  name: string;
  email: string;
  todos: userTodosType;
};
