import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom";

// export const AnimalCard = ({singleAnimal}) => (
//     <section className="animal">
//         <h3 className="animal__name">{singleAnimal.name}</h3>
//         <div className="animal__breed">{singleAnimal.breed}</div>
//     </section>
// )

export const AnimalCard = ({ singleAnimal, handleDeleteAnimal }) => {

    return (
      <div className="card">
        <div className="card-content">
          <picture>
              <img className="card-img" src={`./images/puppy_${singleAnimal.id}.png`} alt="My Dog" />
            </picture>
          <h3>Name: <span className="card-petname">
            {singleAnimal.name}
          </span></h3>
          <p>Breed: {singleAnimal.breed}</p>
          <Link to={`/animals/${singleAnimal.id}`}>
            <button>Details</button>
          </Link>
          <Link to={`/animals/${singleAnimal.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button type="button" onClick={() => handleDeleteAnimal(singleAnimal.id)}>Discharge</button>
        </div>
      </div>
    );
}