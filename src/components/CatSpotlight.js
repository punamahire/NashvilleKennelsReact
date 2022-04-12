import React, { useState, useEffect } from "react";
import { getCatById } from "../AnimalManager";

export const CatSpotlight = ({randomCatId}) => {
  const [cat, setCat] = useState({});

  useEffect(() => {
    getCatById(randomCatId).then(cat => {
      setCat(cat);
    });
  }, [randomCatId]);

  return (
    <div className="cat-spotlight">
      <div>
        <h3>How am I?</h3>
        <picture>
            <img height={cat && cat.height} width={cat && cat.width} src={cat && cat.url} alt="My Cat" />
        </picture>
      </div>
    </div>
  );
};