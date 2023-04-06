import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { PetCard } from './pet-card';
import { Grid } from '@mui/material'
import Navbar from './navbar';
import { GET_PETS } from './queries';


/**
 * Quotes Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
export const Pets = () => {
  const { loading, error, data } = useQuery(GET_PETS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  console.log(data.pets);

  return (
    <>
    <Navbar />
    <Grid container spacing={2} marginTop={2}>
      {
      data.pets.map((pet) => (
        <Grid item key={pet.id} xs={12} md={3} >
          <PetCard  pet={pet}/>
          </Grid>
      ))
    }

    </Grid>
    </>
  );
};

