import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import { Pets }  from './pets';
import { AddPet} from './addPet';
import { PetDetail } from './petDetail';
import { UpdatePet } from './updatePet';

export function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Pets />} path="/" />
        <Route element={<AddPet />} path="addPet" />
        <Route path="petDetail">
            <Route element={<PetDetail />} path=":id" />
            <Route path="edit">
              <Route element={<UpdatePet />} path=":id" />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
