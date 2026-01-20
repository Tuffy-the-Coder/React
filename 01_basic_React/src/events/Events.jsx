
export default function Events() {

    const handleClick = () => console.log("clicked");

    const handleClick2 = (name) => console.log(`${name} stop clicking`);

    const handleMouseOver = (e) => e.target.style.display = "none"; 
    return (
        <>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClick2("Tuffy")}>Click me</button>{/* passing argu directly like (handleClick("name")) will execute the function immediatly so we use arrow function */}
            <button onMouseOver={handleMouseOver}>Caught me!</button>
        </>
    )
}