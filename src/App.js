import React from "react";
import styled from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";import Body from "./Components/Body";
import Private from "./Components/PrivateRoute";
import Signin from "./Components/Signin";
import Header from "./Components/Header";

const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>

        <Route
          path="/"
          element={
            <Private>
              <Body />
             </Private> 
          }
        />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
