import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    userName: String!
    email: String!
    createAt: String!
    token: String!
  }
  input RegisterInput {
    userName: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  input LoginInput {
    userName: String!
    password: String!
  }
  type Query {
    getUsers: [User]
  }
  type Mutation {
    login(loginInput: LoginInput!): User!
    register(registerInput: RegisterInput!): User!
  }
`;
