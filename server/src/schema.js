import gql from "graphql-tag";
export const typeDefs = gql`
  # Schema definitions go here

  type Query {
    pets: [Pet]
    pet(id:ID!): Pet!
  }

  type Error {
    message:String
    path:String
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

type Mutation {
  addPet(input: PetInput!): BaseResponse
  updatePet(id:ID!, input:PetInput!):BaseResponse
 }
`;

