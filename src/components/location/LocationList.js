import React, { useState, useEffect } from 'react';
//import the components we will need
import { LocationCard } from './LocationCard';
import { getAllLocations, deleteLocation } from '../../modules/LocationManager';

export const LocationList = () => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    // use the setlocations function to update state
    return getAllLocations().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  const handleDeleteLocation = id => {
    deleteLocation(id)
    .then(() => getAllLocations().then(setLocations));
  };

  // got the locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  // Finally we use .map() to "loop over" the locations array to show a list of location cards
  return (
    <div className="container-cards">
      {locations.map(location => 
      <LocationCard 
        key={location.id} 
        singleLocation={location} 
        handleDeleteLocation={handleDeleteLocation} />) }
    </div>
  );
};