import gql from "graphql-tag";
export const typeDefs = gql`
  # Schema definitions go here
  type Query {
    pets: [Pet]
    pet(id:ID!): Pet!
    user(id: ID!): User
    users: [User]
  }

  type BaseResponse {
    success:String
    Errors:[Error]
   }

  type Pet {
  id: ID!
  petname: String!
  pettype: String!
  petprice: Float!
  petphoto: String
}

input PetInput {
  petname: String!
  pettype: String!
  petprice: Float!
  petphoto: String
}

#user defs via Zoellick
type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  input CreateUserInput {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    confirmPassword: String!
  }

  input EditUserInput {
    firstName: String
    lastName: String
    email: String
  }

type Location {
    line: Int
    number: Int
  }

  type Exception {
    stacktrace: [String]
  }

  type Extensions {
    code: String
    exception: Exception
  }

  type Error {
    message: String!
    locations: [Location]
    path: [String]
    extensions: Extensions
  }

type Result {
    ok: Boolean
    errors: [Error]
  }

  type AuthenticationResult {
    ok: Boolean
    errors: [Error]
    user: User
  }

type Mutation {
  addPet(input: PetInput!): BaseResponse
  createUser(input: CreateUserInput!): Result
    updateUser(id: ID!, input: CreateUserInput!): Result
    authenticate(username: String!, password: String!): AuthenticationResult
    logout: Result
 }
`;

