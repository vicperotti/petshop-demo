import React, { useState } from 'react'
import { ADD_PET } from './mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import { Button, Grid, TextField } from '@mui/material';
import { GET_PETS } from './queries';

export const AddPet = () => {
  const navigate = useNavigate();

  const [petInput, setPetInput] = useState({
    petname: "",
    petphoto: "",
    petprice: 0,
    pettype: ""
  })

  const [addPet, result] = useMutation(ADD_PET, {
    variables: {
      input: {
        ...petInput
      },
      refetchQueries: [
        { query: GET_PETS }, 'pets'
      ]
    },
    errorPolicy: "all",
    onCompleted: (data) => {
      console.log(data);
      navigate("/", { state: { success: data.success } });
    },
  });

  return (
    <>
      <Navbar />
      <Grid container marginTop={2} direction="column" >
        <Grid item>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            console.log(petInput);
            addPet()
            console.log(result);
          }}
        >
          <TextField
            name="petname"
            label="pet name"
            type="text"
            onChange={e => (setPetInput({ ...petInput, petname: e.target.value }))} />
          <TextField
            name="pettype"
            label="pet type"
            type="text"
            onChange={e => (setPetInput({ ...petInput, pettype: e.target.value }))} />
          <TextField
            name="petprice"
            label="pet price"
            type="text"
            onChange={e => (setPetInput({ ...petInput, petprice: parseFloat(e.target.value) }))} />
          <TextField
            name="petphoto"
            label="pet image url"
            type="text"
            onChange={e => (setPetInput({ ...petInput, petphoto: e.target.value }))} />

          <Button type="submit" variant="outlined">Add this pet!</Button>

        </form>
        </Grid>

      </Grid>
    </>
  )


}
