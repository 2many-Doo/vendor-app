import { gql } from 'graphql-tag';

export const userSchema = gql`
  type User {
    id: ID!
    name: String!
  }

  enum Gender {
    MALE
    FEMALE
  }

  input CreateUserInput {
    name: String!
    teamId: ID
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
  }
`;
