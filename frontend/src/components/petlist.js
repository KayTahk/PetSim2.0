import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, CardHeader, Typography, CardBody} from "@material-tailwind/react";

function PetsList() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/petbreed/');
          setPets(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);

    return (
      <div>
        {pets.map(pet => (
          <Card className='w-96'>
            <CardHeader floated={false} className="h-80">
              <img src={pet.image} alt={pet.description} />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                  {pet.breedName}
              </Typography>
              <Typography color="blue-gray" className="font-medium" textGradient>
                {pet.description}
              </Typography>
            </CardBody>
          </Card>
        )
      )}
      </div>
    );
  }

export default PetsList;