import React, { useState, useEffect } from 'react';
import { getAnimalById, deleteAnimal } from '../../AnimalManager';
import './AnimalDetail.css';
import { useParams, useNavigate } from "react-router-dom"

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {animalId} = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteAnimal(animalId).then(() =>
      navigate("/animals")
    );
  };

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        // you can also set just specific properties and discard other as below:
        // setAnimal({
        //   name: animal.name,
        //   breed: animal.breed
        // });
        setIsLoading(false);
      });
  }, [animalId]);

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location?.name}, {animal.location?.address}</div>
      <div className="animal__owner">Owner: {animal.customer?.name}, {animal.customer?.address}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
      </button>
    </section>
  );
}