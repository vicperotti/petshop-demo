import { gql } from "@apollo/client";

export const ADD_PET = gql`
  mutation ADD_PET($input: PetInput!) {
    addPet(input: $input) {
    success
    Errors {
      message
      path
    }
  }
  }
`;
