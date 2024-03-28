import React, { useState, useEffect } from 'react';
import axios from "axios";

const PetsList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/petsims/');
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '20px' }}>
      {pets.map(pet => (
        <div key={pet.id} style={{ border: '1px solid black', padding: '10px' }}>
          <h3>{pet.petName}</h3>
          <p>Breed: {pet.petBreed}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Pet List</h2>
      <PetsList />
    </div>
  );
}

export default App;
