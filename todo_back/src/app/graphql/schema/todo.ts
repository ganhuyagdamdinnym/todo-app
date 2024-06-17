import { gql } from "graphql-tag";

export const TodoTypeDefs = gql`
  type Todo {
    _id: String
    title: String
    status: Boolean
    team: String
    date: String
  }
  input CreateTodoInput {
    title: String
    team: String
  }
  input DeleteId {
    id: String
  }
  input EdithTodoInput {
    id: String
    title: String
    team: String
  }
  type User {
    id: String
    email: String
    name: String
  }
  input inputSignUp {
    email: String
    name: String
    pass: String!
  }
  input LoginUserInput {
    email: String
    pass: String!
  }
  type deletedTodo {
    _id: String
    title: String
    status: Boolean
    team: String
    Action: String
    date: String
  }

  type Query {
    todoQuery: [Todo]
    getUser: [User]
    getDeletedTodo: [deletedTodo]
  }
  input RefreshTodoInput {
    id: String
  }
  type Mutation {
    todoMutation(input: CreateTodoInput): [Todo]
    deleteTodo(input: DeleteId): Todo
    edithTodo(input: EdithTodoInput): Todo
    signUpUser(input: inputSignUp): User
    RefreshTodo(input: RefreshTodoInput): Todo
    deleteTodoFromTrash(input: RefreshTodoInput): Todo
    loginUser(input: LoginUserInput): String
  }
`;
