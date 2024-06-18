// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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

export type CreateTodoToUserInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
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
  CreateTodoToUser?: Maybe<Array<Maybe<Todo>>>;
  RefreshTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
  deleteTodoFromTrash?: Maybe<Todo>;
  edithTodo?: Maybe<Todo>;
  getTodoFromUser?: Maybe<Array<Maybe<User>>>;
  loginUser?: Maybe<Scalars['String']['output']>;
  signUpUser?: Maybe<User>;
  todoMutation?: Maybe<Array<Maybe<Todo>>>;
};


export type MutationCreateTodoToUserArgs = {
  input?: InputMaybe<CreateTodoToUserInput>;
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


export type MutationGetTodoFromUserArgs = {
  input?: InputMaybe<Token>;
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
  getTodoFromUser?: Maybe<Array<Maybe<User>>>;
  getUser?: Maybe<Array<Maybe<User>>>;
  todoQuery?: Maybe<Array<Maybe<Todo>>>;
};


export type QueryGetTodoFromUserArgs = {
  input?: InputMaybe<Token>;
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

export type Token = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  todos?: Maybe<Array<Maybe<Todo>>>;
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
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pass: Scalars['String']['input'];
};

export type TodoMutationMutationVariables = Exact<{
  input?: InputMaybe<CreateTodoInput>;
}>;


export type TodoMutationMutation = { __typename?: 'Mutation', todoMutation?: Array<{ __typename?: 'Todo', _id?: string | null, title?: string | null, status?: boolean | null, team?: string | null, date?: string | null } | null> | null };

export type CreateTodoToUserMutationVariables = Exact<{
  input?: InputMaybe<CreateTodoToUserInput>;
}>;


export type CreateTodoToUserMutation = { __typename?: 'Mutation', CreateTodoToUser?: Array<{ __typename?: 'Todo', _id?: string | null, title?: string | null, status?: boolean | null, team?: string | null, date?: string | null } | null> | null };

export type SignUpUserMutationVariables = Exact<{ [key: string]: never; }>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser?: { __typename?: 'User', email?: string | null, name?: string | null, password?: string | null } | null };

export type DeleteTodoFromTrashMutationVariables = Exact<{
  input?: InputMaybe<RefreshTodoInput>;
}>;


export type DeleteTodoFromTrashMutation = { __typename?: 'Mutation', deleteTodoFromTrash?: { __typename?: 'Todo', _id?: string | null, title?: string | null, status?: boolean | null, team?: string | null, date?: string | null } | null };

export type GetDeletedTodoQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDeletedTodoQueryQuery = { __typename?: 'Query', getDeletedTodo?: Array<{ __typename?: 'deletedTodo', _id?: string | null, title?: string | null, status?: boolean | null, team?: string | null, date?: string | null } | null> | null };

export type EdithMutationMutationVariables = Exact<{
  input?: InputMaybe<EdithTodoInput>;
}>;


export type EdithMutationMutation = { __typename?: 'Mutation', edithTodo?: { __typename?: 'Todo', _id?: string | null, title?: string | null, status?: boolean | null, team?: string | null, date?: string | null } | null };

export type GetTodoFromUserQueryVariables = Exact<{
  input?: InputMaybe<Token>;
}>;


export type GetTodoFromUserQuery = { __typename?: 'Query', getTodoFromUser?: Array<{ __typename?: 'User', email?: string | null, name?: string | null, password?: string | null, todos?: Array<{ __typename?: 'Todo', _id?: string | null, title?: string | null, status?: boolean | null, team?: string | null, date?: string | null } | null> | null } | null> | null };

export type LoginUserMutationVariables = Exact<{
  input?: InputMaybe<LoginUserInput>;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: string | null };

export type RefreshTodoMutationVariables = Exact<{
  input?: InputMaybe<RefreshTodoInput>;
}>;


export type RefreshTodoMutation = { __typename?: 'Mutation', RefreshTodo?: { __typename?: 'Todo', _id?: string | null, title?: string | null, status?: boolean | null, team?: string | null, date?: string | null } | null };

export type DeleteTodoMutationVariables = Exact<{
  input?: InputMaybe<DeleteId>;
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: { __typename?: 'Todo', _id?: string | null, title?: string | null, status?: boolean | null, team?: string | null, date?: string | null } | null };

export type GetTodoQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodoQueryQuery = { __typename?: 'Query', todoQuery?: Array<{ __typename?: 'Todo', _id?: string | null, title?: string | null, status?: boolean | null, team?: string | null, date?: string | null } | null> | null };


export const TodoMutationDocument = gql`
    mutation TodoMutation($input: CreateTodoInput) {
  todoMutation(input: $input) {
    _id
    title
    status
    team
    date
  }
}
    `;
export type TodoMutationMutationFn = Apollo.MutationFunction<TodoMutationMutation, TodoMutationMutationVariables>;
export type TodoMutationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<TodoMutationMutation, TodoMutationMutationVariables>
    } & TChildProps;
export function withTodoMutation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TodoMutationMutation,
  TodoMutationMutationVariables,
  TodoMutationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, TodoMutationMutation, TodoMutationMutationVariables, TodoMutationProps<TChildProps, TDataName>>(TodoMutationDocument, {
      alias: 'todoMutation',
      ...operationOptions
    });
};

/**
 * __useTodoMutationMutation__
 *
 * To run a mutation, you first call `useTodoMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTodoMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [todoMutationMutation, { data, loading, error }] = useTodoMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTodoMutationMutation(baseOptions?: Apollo.MutationHookOptions<TodoMutationMutation, TodoMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TodoMutationMutation, TodoMutationMutationVariables>(TodoMutationDocument, options);
      }
export type TodoMutationMutationHookResult = ReturnType<typeof useTodoMutationMutation>;
export type TodoMutationMutationResult = Apollo.MutationResult<TodoMutationMutation>;
export type TodoMutationMutationOptions = Apollo.BaseMutationOptions<TodoMutationMutation, TodoMutationMutationVariables>;
export const CreateTodoToUserDocument = gql`
    mutation CreateTodoToUser($input: CreateTodoToUserInput) {
  CreateTodoToUser(input: $input) {
    _id
    title
    status
    team
    date
  }
}
    `;
export type CreateTodoToUserMutationFn = Apollo.MutationFunction<CreateTodoToUserMutation, CreateTodoToUserMutationVariables>;
export type CreateTodoToUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateTodoToUserMutation, CreateTodoToUserMutationVariables>
    } & TChildProps;
export function withCreateTodoToUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTodoToUserMutation,
  CreateTodoToUserMutationVariables,
  CreateTodoToUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTodoToUserMutation, CreateTodoToUserMutationVariables, CreateTodoToUserProps<TChildProps, TDataName>>(CreateTodoToUserDocument, {
      alias: 'createTodoToUser',
      ...operationOptions
    });
};

/**
 * __useCreateTodoToUserMutation__
 *
 * To run a mutation, you first call `useCreateTodoToUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoToUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoToUserMutation, { data, loading, error }] = useCreateTodoToUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTodoToUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoToUserMutation, CreateTodoToUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoToUserMutation, CreateTodoToUserMutationVariables>(CreateTodoToUserDocument, options);
      }
export type CreateTodoToUserMutationHookResult = ReturnType<typeof useCreateTodoToUserMutation>;
export type CreateTodoToUserMutationResult = Apollo.MutationResult<CreateTodoToUserMutation>;
export type CreateTodoToUserMutationOptions = Apollo.BaseMutationOptions<CreateTodoToUserMutation, CreateTodoToUserMutationVariables>;
export const SignUpUserDocument = gql`
    mutation SignUpUser {
  signUpUser {
    email
    name
    password
  }
}
    `;
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>;
export type SignUpUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>
    } & TChildProps;
export function withSignUpUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignUpUserMutation,
  SignUpUserMutationVariables,
  SignUpUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SignUpUserMutation, SignUpUserMutationVariables, SignUpUserProps<TChildProps, TDataName>>(SignUpUserDocument, {
      alias: 'signUpUser',
      ...operationOptions
    });
};

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignUpUserMutation(baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options);
      }
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>;
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>;
export const DeleteTodoFromTrashDocument = gql`
    mutation DeleteTodoFromTrash($input: RefreshTodoInput) {
  deleteTodoFromTrash(input: $input) {
    _id
    title
    status
    team
    date
  }
}
    `;
export type DeleteTodoFromTrashMutationFn = Apollo.MutationFunction<DeleteTodoFromTrashMutation, DeleteTodoFromTrashMutationVariables>;
export type DeleteTodoFromTrashProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteTodoFromTrashMutation, DeleteTodoFromTrashMutationVariables>
    } & TChildProps;
export function withDeleteTodoFromTrash<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTodoFromTrashMutation,
  DeleteTodoFromTrashMutationVariables,
  DeleteTodoFromTrashProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTodoFromTrashMutation, DeleteTodoFromTrashMutationVariables, DeleteTodoFromTrashProps<TChildProps, TDataName>>(DeleteTodoFromTrashDocument, {
      alias: 'deleteTodoFromTrash',
      ...operationOptions
    });
};

/**
 * __useDeleteTodoFromTrashMutation__
 *
 * To run a mutation, you first call `useDeleteTodoFromTrashMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoFromTrashMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoFromTrashMutation, { data, loading, error }] = useDeleteTodoFromTrashMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTodoFromTrashMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoFromTrashMutation, DeleteTodoFromTrashMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoFromTrashMutation, DeleteTodoFromTrashMutationVariables>(DeleteTodoFromTrashDocument, options);
      }
export type DeleteTodoFromTrashMutationHookResult = ReturnType<typeof useDeleteTodoFromTrashMutation>;
export type DeleteTodoFromTrashMutationResult = Apollo.MutationResult<DeleteTodoFromTrashMutation>;
export type DeleteTodoFromTrashMutationOptions = Apollo.BaseMutationOptions<DeleteTodoFromTrashMutation, DeleteTodoFromTrashMutationVariables>;
export const GetDeletedTodoQueryDocument = gql`
    query getDeletedTodoQuery {
  getDeletedTodo {
    _id
    title
    status
    team
    date
  }
}
    `;
export type GetDeletedTodoQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetDeletedTodoQueryQuery, GetDeletedTodoQueryQueryVariables>
    } & TChildProps;
export function withGetDeletedTodoQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetDeletedTodoQueryQuery,
  GetDeletedTodoQueryQueryVariables,
  GetDeletedTodoQueryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetDeletedTodoQueryQuery, GetDeletedTodoQueryQueryVariables, GetDeletedTodoQueryProps<TChildProps, TDataName>>(GetDeletedTodoQueryDocument, {
      alias: 'getDeletedTodoQuery',
      ...operationOptions
    });
};

/**
 * __useGetDeletedTodoQueryQuery__
 *
 * To run a query within a React component, call `useGetDeletedTodoQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeletedTodoQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeletedTodoQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDeletedTodoQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetDeletedTodoQueryQuery, GetDeletedTodoQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDeletedTodoQueryQuery, GetDeletedTodoQueryQueryVariables>(GetDeletedTodoQueryDocument, options);
      }
export function useGetDeletedTodoQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDeletedTodoQueryQuery, GetDeletedTodoQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDeletedTodoQueryQuery, GetDeletedTodoQueryQueryVariables>(GetDeletedTodoQueryDocument, options);
        }
export function useGetDeletedTodoQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetDeletedTodoQueryQuery, GetDeletedTodoQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDeletedTodoQueryQuery, GetDeletedTodoQueryQueryVariables>(GetDeletedTodoQueryDocument, options);
        }
export type GetDeletedTodoQueryQueryHookResult = ReturnType<typeof useGetDeletedTodoQueryQuery>;
export type GetDeletedTodoQueryLazyQueryHookResult = ReturnType<typeof useGetDeletedTodoQueryLazyQuery>;
export type GetDeletedTodoQuerySuspenseQueryHookResult = ReturnType<typeof useGetDeletedTodoQuerySuspenseQuery>;
export type GetDeletedTodoQueryQueryResult = Apollo.QueryResult<GetDeletedTodoQueryQuery, GetDeletedTodoQueryQueryVariables>;
export const EdithMutationDocument = gql`
    mutation EdithMutation($input: EdithTodoInput) {
  edithTodo(input: $input) {
    _id
    title
    status
    team
    date
  }
}
    `;
export type EdithMutationMutationFn = Apollo.MutationFunction<EdithMutationMutation, EdithMutationMutationVariables>;
export type EdithMutationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EdithMutationMutation, EdithMutationMutationVariables>
    } & TChildProps;
export function withEdithMutation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EdithMutationMutation,
  EdithMutationMutationVariables,
  EdithMutationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EdithMutationMutation, EdithMutationMutationVariables, EdithMutationProps<TChildProps, TDataName>>(EdithMutationDocument, {
      alias: 'edithMutation',
      ...operationOptions
    });
};

/**
 * __useEdithMutationMutation__
 *
 * To run a mutation, you first call `useEdithMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEdithMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [edithMutationMutation, { data, loading, error }] = useEdithMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEdithMutationMutation(baseOptions?: Apollo.MutationHookOptions<EdithMutationMutation, EdithMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EdithMutationMutation, EdithMutationMutationVariables>(EdithMutationDocument, options);
      }
export type EdithMutationMutationHookResult = ReturnType<typeof useEdithMutationMutation>;
export type EdithMutationMutationResult = Apollo.MutationResult<EdithMutationMutation>;
export type EdithMutationMutationOptions = Apollo.BaseMutationOptions<EdithMutationMutation, EdithMutationMutationVariables>;
export const GetTodoFromUserDocument = gql`
    query GetTodoFromUser($input: Token) {
  getTodoFromUser(input: $input) {
    email
    name
    password
    todos {
      _id
      title
      status
      team
      date
    }
  }
}
    `;
export type GetTodoFromUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetTodoFromUserQuery, GetTodoFromUserQueryVariables>
    } & TChildProps;
export function withGetTodoFromUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTodoFromUserQuery,
  GetTodoFromUserQueryVariables,
  GetTodoFromUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetTodoFromUserQuery, GetTodoFromUserQueryVariables, GetTodoFromUserProps<TChildProps, TDataName>>(GetTodoFromUserDocument, {
      alias: 'getTodoFromUser',
      ...operationOptions
    });
};

/**
 * __useGetTodoFromUserQuery__
 *
 * To run a query within a React component, call `useGetTodoFromUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoFromUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoFromUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetTodoFromUserQuery(baseOptions?: Apollo.QueryHookOptions<GetTodoFromUserQuery, GetTodoFromUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoFromUserQuery, GetTodoFromUserQueryVariables>(GetTodoFromUserDocument, options);
      }
export function useGetTodoFromUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoFromUserQuery, GetTodoFromUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoFromUserQuery, GetTodoFromUserQueryVariables>(GetTodoFromUserDocument, options);
        }
export function useGetTodoFromUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTodoFromUserQuery, GetTodoFromUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTodoFromUserQuery, GetTodoFromUserQueryVariables>(GetTodoFromUserDocument, options);
        }
export type GetTodoFromUserQueryHookResult = ReturnType<typeof useGetTodoFromUserQuery>;
export type GetTodoFromUserLazyQueryHookResult = ReturnType<typeof useGetTodoFromUserLazyQuery>;
export type GetTodoFromUserSuspenseQueryHookResult = ReturnType<typeof useGetTodoFromUserSuspenseQuery>;
export type GetTodoFromUserQueryResult = Apollo.QueryResult<GetTodoFromUserQuery, GetTodoFromUserQueryVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($input: LoginUserInput) {
  loginUser(input: $input)
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;
export type LoginUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>
    } & TChildProps;
export function withLoginUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginUserMutation,
  LoginUserMutationVariables,
  LoginUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginUserMutation, LoginUserMutationVariables, LoginUserProps<TChildProps, TDataName>>(LoginUserDocument, {
      alias: 'loginUser',
      ...operationOptions
    });
};

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const RefreshTodoDocument = gql`
    mutation RefreshTodo($input: RefreshTodoInput) {
  RefreshTodo(input: $input) {
    _id
    title
    status
    team
    date
  }
}
    `;
export type RefreshTodoMutationFn = Apollo.MutationFunction<RefreshTodoMutation, RefreshTodoMutationVariables>;
export type RefreshTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<RefreshTodoMutation, RefreshTodoMutationVariables>
    } & TChildProps;
export function withRefreshTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RefreshTodoMutation,
  RefreshTodoMutationVariables,
  RefreshTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RefreshTodoMutation, RefreshTodoMutationVariables, RefreshTodoProps<TChildProps, TDataName>>(RefreshTodoDocument, {
      alias: 'refreshTodo',
      ...operationOptions
    });
};

/**
 * __useRefreshTodoMutation__
 *
 * To run a mutation, you first call `useRefreshTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTodoMutation, { data, loading, error }] = useRefreshTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRefreshTodoMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTodoMutation, RefreshTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTodoMutation, RefreshTodoMutationVariables>(RefreshTodoDocument, options);
      }
export type RefreshTodoMutationHookResult = ReturnType<typeof useRefreshTodoMutation>;
export type RefreshTodoMutationResult = Apollo.MutationResult<RefreshTodoMutation>;
export type RefreshTodoMutationOptions = Apollo.BaseMutationOptions<RefreshTodoMutation, RefreshTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($input: DeleteId) {
  deleteTodo(input: $input) {
    _id
    title
    status
    team
    date
  }
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;
export type DeleteTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>
    } & TChildProps;
export function withDeleteTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTodoMutation,
  DeleteTodoMutationVariables,
  DeleteTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTodoMutation, DeleteTodoMutationVariables, DeleteTodoProps<TChildProps, TDataName>>(DeleteTodoDocument, {
      alias: 'deleteTodo',
      ...operationOptions
    });
};

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const GetTodoQueryDocument = gql`
    query getTodoQuery {
  todoQuery {
    _id
    title
    status
    team
    date
  }
}
    `;
export type GetTodoQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetTodoQueryQuery, GetTodoQueryQueryVariables>
    } & TChildProps;
export function withGetTodoQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTodoQueryQuery,
  GetTodoQueryQueryVariables,
  GetTodoQueryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetTodoQueryQuery, GetTodoQueryQueryVariables, GetTodoQueryProps<TChildProps, TDataName>>(GetTodoQueryDocument, {
      alias: 'getTodoQuery',
      ...operationOptions
    });
};

/**
 * __useGetTodoQueryQuery__
 *
 * To run a query within a React component, call `useGetTodoQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodoQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetTodoQueryQuery, GetTodoQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoQueryQuery, GetTodoQueryQueryVariables>(GetTodoQueryDocument, options);
      }
export function useGetTodoQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoQueryQuery, GetTodoQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoQueryQuery, GetTodoQueryQueryVariables>(GetTodoQueryDocument, options);
        }
export function useGetTodoQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTodoQueryQuery, GetTodoQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTodoQueryQuery, GetTodoQueryQueryVariables>(GetTodoQueryDocument, options);
        }
export type GetTodoQueryQueryHookResult = ReturnType<typeof useGetTodoQueryQuery>;
export type GetTodoQueryLazyQueryHookResult = ReturnType<typeof useGetTodoQueryLazyQuery>;
export type GetTodoQuerySuspenseQueryHookResult = ReturnType<typeof useGetTodoQuerySuspenseQuery>;
export type GetTodoQueryQueryResult = Apollo.QueryResult<GetTodoQueryQuery, GetTodoQueryQueryVariables>;