
import "./Student.css"
import PropTypes from "prop-types"

function Student(props) {
    return (
        <>
            <div className="ID-Card">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
            </div>
        </>
    )
}

export default Student