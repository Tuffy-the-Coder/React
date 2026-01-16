// props = properties are used to pass data from one component to another


import Student from "./Student.jsx"

function Card() {
    return (
        <>
            <Student name= "Tyson" age={20} isStudent={true}/>
            <Student name="Max" age={19} isStudent={true}/>
            <Student name="Ray" age={20} isStudent={false}/>
            <Student name="Kai" age={21} isStudent={true}/>

        </>
    )
}

export default Card