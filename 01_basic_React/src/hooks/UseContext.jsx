import { useState, useContext } from "react";
import { createContext } from "react";
import Component1 from "./Component1";
export const NameContext = createContext();

export default function UseContext() {
    const [user, setUser] = useState("Tuffy");

    return (
        <>
            <NameContext.Provider value={user}>
                <Component1 />
            </NameContext.Provider>
        </>
    )
}