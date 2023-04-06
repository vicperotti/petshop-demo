import { gql } from "@apollo/client";

export const GET_PETS = gql`
query Pets {
  pets { 
    petname
    petprice
    id
    petphoto
    pettype
  }
}`

export const GET_PET = gql`
query Pet($petId: ID!) {
  pet(id: $petId) {
    id
    petname
    pettype
    petprice
    petphoto
  }
}`