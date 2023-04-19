import React, { useState } from 'react'
import { UPDATE_PET } from './mutations';
import { useMutation } from '@apollo/client';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Navbar from './navbar';
import { Button, Grid, TextField } from '@mui/material';
import { GET_PETS } from './queries';

export const UpdatePet = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const location = useLocation();

  const [petInput, setPetInput] = useState({
    petname: location.state.petname,
    pettype: location.state.pettype,
    petprice: location.state.petprice,
    petphoto: location.state.petphoto,
  })

  const [updatePet, result] = useMutation(UPDATE_PET, {
    variables: {updatePetId:id,
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
            updatePet()
            console.log(result);
          }}
        >
          <TextField
            name="petname"
            label="pet name"
            type="text"
            defaultValue={location.state.petname}
            onChange={e => (setPetInput({ ...petInput, petname: e.target.value }))} />
          <TextField
            name="pettype"
            label="pet type"
            type="text"
            defaultValue={location.state.pettype}
            onChange={e => (setPetInput({ ...petInput, pettype: e.target.value }))} />
          <TextField
            name="petprice"
            label="pet price"
            type="text"
            defaultValue={location.state.petprice}
            onChange={e => (setPetInput({ ...petInput, petprice: parseFloat(e.target.value)}))} />
          <TextField
            name="petphoto"
            label="pet image url"
            type="text"
            defaultValue={location.state.petphoto}
            onChange={e => (setPetInput({ ...petInput, petphoto: e.target.value}))} />

          <Button type="submit" variant="outlined">Update this pet!</Button>

        </form>
        </Grid>

      </Grid>
    </>
  )


}
