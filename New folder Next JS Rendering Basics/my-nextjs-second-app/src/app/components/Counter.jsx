"use client"

import { useState } from "react";


const Counter = () => {
    console.log("Counter component rendered");

    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
        console.log("Increase Button Clicked")
        setCounter(counter+1);
    }
    return (
        <div>
            <h2 className="text-4xl">Counter: {counter}</h2>
            <button onClick={handleIncrease} className="btn btn-warning text-black">Increase Counter</button>
        </div>
    );
};

export default Counter;