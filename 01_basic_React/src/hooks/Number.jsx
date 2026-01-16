import React, { useState } from "react";
import "./Number.css"


function Number() {
    let [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }
    const Decrement = () => {
        setCount(count - 1);
    }
    const Reset = () => {
        setCount(0);
    }
    return (
        <>  <div className="container">
                <p id="number"> {count}</p>
                <button onClick={Increment}><b>Increment</b></button>
                <button onClick={Reset}><b>Reset</b></button>
                <button onClick ={Decrement}><b>Decrement</b></button>
            </div>
        </>
    )
}


export default Number





