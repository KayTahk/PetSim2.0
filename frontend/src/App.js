import React from "react";
import PetsList from "./components/petlist";
import Nav from './components/navbar'
import './App.css'

function App() {
  return (
    <div>
      <Nav />
      <PetsList />
    </div>
  );
}

export default App;
