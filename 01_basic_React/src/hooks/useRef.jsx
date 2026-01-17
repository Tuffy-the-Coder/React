import { useState, useEffect, useRef } from "react";


// export default function Data() {

//     // const [count, setCount] = useState(0)
//     let count = useRef(0)
//     let num = 0;
//     console.log(count);

//     useEffect(() => {
//         console.log("Rendering...");
//     })

//     function updateCount() {
//         // count.current++;
//         num++
//         count.current.innerText = num;
//         console.log(count.current);
//         // setCount(c => c + 1);
//     }
//     function changeColor() {
//         count.current.style.color = "blue"
//     }
//     return (
//         <>
//             {/* <p ref={count}>{count.current}</p> */}
//             <p ref={count}>{num}</p>
//             <button onClick={updateCount}>Click me</button>
//             <button onClick={changeColor}>Change Color</button>
//         </>
//     )

// }


export default function Data() {

    useEffect(() => {
        console.log("Rendering..");
    })
    
    const fName = useRef(null);
    const lName = useRef(null);
    const age = useRef(null);

    function handleFname() {
        fName.current.focus();
        fName.current.style.background = "yellow";
        lName.current.style.background = "";
        age.current.style.background = "";
    }
    function handleLname() {
        lName.current.focus();
        fName.current.style.background = "";
        lName.current.style.background = "yellow";
        age.current.style.background = "";

    }
    function handleAge() {
        age.current.focus();
        fName.current.style.background = "";
        lName.current.style.background = "";
        age.current.style.background = "yellow";
    }





    return (
        <>
            <input ref={fName} placeholder="Enter First Name" /> <button onClick={handleFname}/>
            <input ref={lName} placeholder="Enter Last Name" /> <button onClick={handleLname}/>
            <input ref={age} placeholder="Enter age" type="number"/> <button onClick={handleAge}/>
        </>
    )

}