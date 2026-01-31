import { useState } from "react"
import useLocalStorage from "./UseLocalStorage";
import useUpdateLogger from "./useUpdateLogger";
export default function CustomHooks() {
    
    const [name, setName] = useLocalStorage('name', "");

    const updateName  = (e) => {
        setName(e.target.value);
    }
    
    useUpdateLogger(name, setName);
    return (
        <div style={{textAlign : "center"}}>
        <input 
            value={name}
            placeholder="Enter Your Name"
            onChange = {updateName}
            style={{fontSize: "3rem"}}              
            />
            </div>
    )
}