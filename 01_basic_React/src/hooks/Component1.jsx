import Component2 from "./Component2";
import { useContext } from "react";
import { NameContext } from "./UseContext";

export default function Component1() {
    const name = useContext(NameContext);
    return (
        <div style={{border: "2px solid black"}}>
            <h1>comp1</h1>
            <h1>Welcome {name}</h1>
            <Component2 />
        </div>
    )
}