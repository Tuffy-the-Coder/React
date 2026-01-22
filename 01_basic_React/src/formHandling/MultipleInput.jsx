import { useState } from "react"

export default function MultipleInput() {

    const [form, setForm] = useState({name:"", password:""});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }
    const handleChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setForm({...form, [e.target.name]:e.target.value});
        console.log(form);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="name" value = {form.name} type="text" placeholder="Enter Your Name" />
                <input onChange={handleChange} name="password" value = {form.password} type="Password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}