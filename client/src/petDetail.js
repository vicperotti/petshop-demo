import { useQuery } from "@apollo/client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_PET } from "./queries";
import Navbar from "./navbar";

export const PetDetail = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_PET, {
    variables: { petId: id },
  });

  if (error) return "errorrrrr";

  if (loading) return "loading...";

  const pet = data.pet;
  return (
    <>
   <Navbar />
    <Grid container spacing={4} marginTop={2}>
    <Grid item xs={2}></Grid>
    <Grid item xs={3}>
        <Typography variant="h5">{pet.petname}</Typography><Typography>is a fun loving {pet.pettype} who loves to play!</Typography>
        <br></br>
        <Typography>You can take {pet.petname} home today for ${pet.petprice}!</Typography>
      </Grid>

      <Grid item xs={2}>
      <Box component="img" src={pet.petphoto}    sx={{
          maxHeight: { xs: 350, md: 250 },
          maxWidth: { xs: 500, md: 700 },
        }}/>
        <Typography variant="h4">{pet.petname}</Typography>
      </Grid>

    </Grid>
    
  
    </>
  );
};


