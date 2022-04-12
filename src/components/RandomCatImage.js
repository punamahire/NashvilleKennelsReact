import React, { useEffect, useState } from "react";
import { getRandomCat, getCatId } from "../AnimalManager";
import { CatSpotlight } from "./CatSpotlight"

export const RandomCatImage = () => {

    const [cat, setCat] = useState("")
    const [catId, setCatId] = useState(0)

    useEffect(() => {
        // if(!cat){
            getRandomCat().then(cat => {
                console.log(cat)
                setCat(cat)
            })
        
    },[])

    // For each button click - get a random cat
    const refreshCat = () => {
        getCatId().then(setCatId)
    }

    useEffect(() => {
        refreshCat()
    }, [])

    return (
        <>
            <div className="card-content">
                <h2>Random Cat</h2>
                <picture>
                    <img height={cat && cat.height} width={cat && cat.width} src={cat && cat.url} alt="My Cat" />
                </picture><br></br>
                <button onClick={refreshCat}>Reload &#x27f3;</button>
                {
                    catId && <CatSpotlight randomCatId={catId} />
                }
            </div>
        </>
    )
}


// [
//     {
//         "breeds":[],
//         "id":"Fwj9z7tCz",
//         "url":"https://cdn2.thecatapi.com/images/Fwj9z7tCz.jpg",
//         "width":640,
//         "height":427
//     }
// ]