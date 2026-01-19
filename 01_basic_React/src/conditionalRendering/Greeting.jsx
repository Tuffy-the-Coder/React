import ConditionalRendering from "./conditionalRendering"
import { useState } from "react";

export default function Greeting () {
    const [isLogged, setisLogged] = useState(false);
    return (
        <>
            <button onClick={() => setisLogged(!isLogged)} style={{width : 50, height : 30}}></button>
                {console.log("rendering")}
            <ConditionalRendering isLoggedIn={isLogged} userName="Anurag" />
        </>
    )
}