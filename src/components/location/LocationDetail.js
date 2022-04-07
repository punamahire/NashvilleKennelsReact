import React, { useState, useEffect } from 'react';
import { getLocationById, deleteLocation } from '../../modules/LocationManager';
import './LocationDetail.css';
import { useParams, useNavigate } from "react-router-dom"

export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {locationId} = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteLocation(locationId).then(() =>
      navigate("/locations")
    );
  };

  useEffect(() => {
    //getLocationById(id) from LocationManager and hang on to the data; put it into state
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address
        });
        setIsLoading(false);
      });
  }, [locationId]);

  return (
    <section className="location">
      <h3 className="location__name">Name: {location.name}</h3>
      <div className="location__address">Address: {location.address}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close this location
      </button>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="location__animal__name">Location: {location.animals[0]?.name}</div>
      <div className="location__employee__name">Address: {location.employees[0]?.name}</div> */}
    </section>
  );
}