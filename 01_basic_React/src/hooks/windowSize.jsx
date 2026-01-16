import React, { useState, useEffect } from "react"

function Size() {

    const [height, setheight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)

    function handleResize(params) {
        setheight(window.innerHeight);
        setWidth(window.innerWidth);
        
    }
    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("event added");
        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("event removed");
        }
    }, [])
    useEffect(()=> {
        document.title = `Size is ${height} x ${width}`
    },[height, width])
        
    return (
        <>
            <p>Height: {height}</p>
            <p>Width: {width}</p>
        </>
    )
}

export default Size