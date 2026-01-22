
// default submit would reload the page 


export default function PreventDefault() {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
    }

    return (
        <>
            <form onSubmit={(e) => {submitHandler(e)}}>
                <input type="text" placeholder="Enter Name" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}