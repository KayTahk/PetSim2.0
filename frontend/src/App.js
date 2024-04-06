import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import PetsList from './components/petlist';
import Nav from "./components/navbar";
import Management from './components/management';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<><Nav /><PetsList /></>} />
        <Route path="/management" element={<Management />}/>
      </Routes>
    </div>
  );
}

export default App;