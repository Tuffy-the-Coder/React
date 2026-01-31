import { useState } from "react";
import ChangeTheme from "./ChangeTheme";

export default function ReversePropsDrilling() {
    const [theme, setTheme] = useState('Light');

    return (
    <>
        <h1>Theme is {theme}</h1>
        <ChangeTheme theme={theme} setTheme = {setTheme}/>
    </>
    )
}