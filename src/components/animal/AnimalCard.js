import React from "react"
import "./Animal.css"

// export const AnimalCard = ({singleAnimal}) => (
//     <section className="animal">
//         <h3 className="animal__name">{singleAnimal.name}</h3>
//         <div className="animal__breed">{singleAnimal.breed}</div>
//     </section>
// )

export const AnimalCard = ({ singleAnimal }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
              <img src={`./images/puppy_${singleAnimal.id}.png`} alt="My Dog" />
            </picture>
          <h3>Name: <span className="card-petname">
            {singleAnimal.name}
          </span></h3>
          <p>Breed: {singleAnimal.breed}</p>
        </div>
      </div>
    );
}