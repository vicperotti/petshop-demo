import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import { Pets }  from './pets';
import { AddPet} from './addPet';
import { PetDetail } from './petDetail';

export function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Pets />} path="/" />
        <Route element={<AddPet />} path="addPet" />
        <Route path="petDetail">
            <Route element={<PetDetail />} path=":id" />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
