import React, { useContext } from "react"
import {NameContext} from "./UseContext.jsx"
export default function Component4() {
    const name = useContext(NameContext)
    return (
        <div style={{border: "2px solid black"}}>
            <h4>comp4</h4>
            <h4>Bye {name}</h4>
        </div>
    )
}