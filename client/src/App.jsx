import React from "react";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter.jsx";
import NavBar from "./components/NavBar.jsx";

const  App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
