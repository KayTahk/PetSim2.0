import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, CardHeader, Typography, CardBody, CardFooter, Button} from "@material-tailwind/react";

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
      <div className="flex justify-center p-10 bg-light">
        <div className='petCards'>
          {pets.map(pet => (
            <Card shadow={false} className='max-w-[24rem] overflow-hidden border-2 border-dark bg-banana'>
              <CardHeader floated={false} shadow={false} className="relative h-56 bg-light border-2 border-dark">
                <img src={pet.image} alt={pet.description} />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="dark" className="mb-2">
                    {pet.breedName}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                  {pet.description}
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <Button variant="text" size="lg" className="hidden lg:inline-block bg-light text-dark border-2 border-dark"><span>Adopt</span></Button>
              </CardFooter>
            </Card>
          )
        )}
        </div>
      </div>
    );
  }

export default PetsList;