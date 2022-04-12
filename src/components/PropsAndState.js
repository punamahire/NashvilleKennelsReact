import React, { useEffect, useState } from "react"

export const PropsAndState = ( { yourName, myAddress } ) => {
    let [countClicks, setCountClicks] = useState(0)
    const [counter, setCounter] = useState(10)
    const [fourTimesVal, setFourTimesVal] = useState(counter)

    const handleClick = () => {
        //good practice:
        //make a copy of state, modify it, and then setState to the copy
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
    }

    // Display a countdown from 10 to 1
    useEffect(() => {
        if (counter !== 0) {
            setTimeout(() => {
                const newCounter = counter - 1;
                setCounter(newCounter);
            }, 1000);

            setFourTimesVal(counter * 4)
        } else {
            setFourTimesVal(0)
        }
    }, [counter])

    return (
        <>
            <h3>Welcome { yourName } </h3>
            <p>My Address:</p>
            <span>{ myAddress.streetAddress } { myAddress.city } { myAddress.state } { myAddress.zip }</span>  
            <p>{counter == 0 ? "Countdown reached 0" : `Counter: ${counter}`}</p>
            <p>Four times counter: {fourTimesVal}</p>
            <button type="button" onClick={(handleClick)}>Click Me</button>
            <p>Number of clicks: {countClicks}</p>
        </>
    )
}