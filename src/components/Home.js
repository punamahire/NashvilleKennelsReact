import React, { useState, useEffect } from "react";
import { AnimalSpotlight } from "../components/animal/AnimalSpotlight"
import { getRandomId } from "../AnimalManager";
import { PropsAndState } from './PropsAndState'
import { RandomCatImage } from "./RandomCatImage";

export const Home = () => {
    const [spotlightId, setSpotlightId] = useState(0);

    const address = {
        streetAddress: "123 NSS Way",
        city: "Nashville",
        state: "TN",
        zip: 37536
    }

    const refreshSpotlightAnimal = () => {
        getRandomId().then(setSpotlightId);
    };

    useEffect(() => {
        refreshSpotlightAnimal();
    }, []);

    return (
        <>
            <h2>Nashville Kennels</h2>
            <small>Loving care when you're not there.</small>
            <address>
                <div>Visit Us at the Nashville North Location</div>
                <div>500 Puppy Way</div>
            </address>
            <h1>Animal Spotlight</h1>
            <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
            {
                spotlightId && <AnimalSpotlight animalId={spotlightId} />
            }
            <PropsAndState yourName={"Punam"} myAddress={address} />
            <RandomCatImage />
        </>
    )
}