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

  type Query {
    todoQuery: [Todo]
    getUser: [User]
  }
  type Mutation {
    todoMutation(input: CreateTodoInput): [Todo]
    deleteTodo(input: DeleteId): Todo
    edithTodo(input: EdithTodoInput): Todo
    signUpUser(input: inputSignUp): User
  }
`;
