import React, { useState, useEffect } from "react";

function Container() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("black")

    // runs after every render
    // useEffect(() => {
    //     document.title = `Count is ${count} in ${color}`;
    // });


    // runs only when mount
    // useEffect(() => {
    //     document.title = `Count is ${count} in ${color}`;
    // },[]);


    // runs only when mount & value changes
    useEffect(() => {
        document.title = `Count is ${count} in ${color}`;
    }, [count, color]);

    
    const addCount = () => {
        setCount(count + 1);
    }
    const minusCount = () => {
        setCount(count - 1);
    }
    const changeColor = () => {
        setColor(color => color === "blue" ? "green" : "blue");
    }

    return (
        <>
            <p style={{ color: color }}>{count}</p>
            <button onClick={addCount}>+</button>
            <button onClick={minusCount}>-</button>
            <button onClick={changeColor}>color</button>
            <br />
        </>
    )
}

export default Container