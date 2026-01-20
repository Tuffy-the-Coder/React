
import { useState, useEffect } from "react";
import CardData from "./CardData";
import "./Card.css"
function Cards() {

    const [data, setData] = useState([]); 
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
    },[])
    
    // console.log(data);

    return (
        <>
            <CardData data={data}/>
            
        </>
    )
}

export default Cards