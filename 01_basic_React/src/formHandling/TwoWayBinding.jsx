import { useState } from "react"

export default function TwoWayBinding() {

    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }
    const handleChange = (e) => {
        setName(e.target.value);
        console.log(name);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => {handleChange(e)}} value = {name} type="text" placeholder="Enter Your Name" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}