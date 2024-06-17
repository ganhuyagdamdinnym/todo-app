export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateTodoInput = {
  team?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteId = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EdithTodoInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LoginUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  pass: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  RefreshTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
  deleteTodoFromTrash?: Maybe<Todo>;
  edithTodo?: Maybe<Todo>;
  loginUser?: Maybe<Scalars['String']['output']>;
  signUpUser?: Maybe<User>;
  todoMutation?: Maybe<Array<Maybe<Todo>>>;
};


export type MutationRefreshTodoArgs = {
  input?: InputMaybe<RefreshTodoInput>;
};


export type MutationDeleteTodoArgs = {
  input?: InputMaybe<DeleteId>;
};


export type MutationDeleteTodoFromTrashArgs = {
  input?: InputMaybe<RefreshTodoInput>;
};


export type MutationEdithTodoArgs = {
  input?: InputMaybe<EdithTodoInput>;
};


export type MutationLoginUserArgs = {
  input?: InputMaybe<LoginUserInput>;
};


export type MutationSignUpUserArgs = {
  input?: InputMaybe<InputSignUp>;
};


export type MutationTodoMutationArgs = {
  input?: InputMaybe<CreateTodoInput>;
};

export type Query = {
  __typename?: 'Query';
  getDeletedTodo?: Maybe<Array<Maybe<DeletedTodo>>>;
  getUser?: Maybe<Array<Maybe<User>>>;
  todoQuery?: Maybe<Array<Maybe<Todo>>>;
};

export type RefreshTodoInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Todo = {
  __typename?: 'Todo';
  _id?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  team?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DeletedTodo = {
  __typename?: 'deletedTodo';
  Action?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  team?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type InputSignUp = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pass: Scalars['String']['input'];
};


