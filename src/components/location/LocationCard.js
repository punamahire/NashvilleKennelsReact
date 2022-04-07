import React from "react"
import "./Location.css"

export const LocationCard = ({singleLocation}) => {
    
    // console.log(singleLocation);

    return (
        <section className="location">
            <h3 className="location__name">{singleLocation.name}</h3>
            <div className="location__address">{singleLocation.address}</div>
        </section>
    )    
}