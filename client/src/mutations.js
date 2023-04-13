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
export const UPDATE_PET = gql`
  mutation UPDATE_PET($updatePetId: ID!, $input: PetInput!) {
    updatePet(id: $updatePetId, input: $input) {
      success
      Errors {
        message
        path
      }
    }
  }
`;
