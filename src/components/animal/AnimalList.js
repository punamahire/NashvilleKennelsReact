import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import the components we will need
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, getAnimalById, deleteAnimal } from '../../AnimalManager';

export const AnimalList = () => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);
  const navigate = useNavigate();

  const getAnimals = () => {
    // After the data comes back from the API, we
    // use the setAnimals function to update state
    return getAllAnimals().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  const handleDeleteAnimal = id => {
    deleteAnimal(id)
    .then(() => getAllAnimals().then(setAnimals));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
  <>
    <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {navigate("/animals/create")}}>
            Admit Animal
        </button>
    </section>
    <div className="container-cards">
      {animals.map(animal => 
        <AnimalCard 
          key={animal.id} 
          singleAnimal={animal} 
          handleDeleteAnimal={handleDeleteAnimal} />
      )}
    </div>
  </>

  );
}