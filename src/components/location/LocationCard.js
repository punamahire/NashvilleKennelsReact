import React from "react"
import "./Location.css"
import { Link } from "react-router-dom";

export const LocationCard = ({singleLocation, handleDeleteLocation}) => {

    return (
        <section className="location">
            <h3 className="location__name">{singleLocation.name}</h3>
            <div className="location__address">{singleLocation.address}</div>
            <Link to={`/locations/${singleLocation.id}`}>
                <button>Details</button>
            </Link>
            <Link to={`/locations/${singleLocation.id}/edit`}>
                <button>Edit</button>
            </Link>
            <button type="button" onClick={() => handleDeleteLocation(singleLocation.id)}>Remove Location</button>
        </section>
    )    
}