import { useState } from "react";
import "./NotesApp.css"

export default function NotesApp() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [notes, setNotes] = useState([]);

    function submitHandler(e) {
        e.preventDefault();
        if (title === "" || description === "") {
            alert("Cant submit empty title or description");
        } else {
        const copyNotes = [...notes]                 // makes a copy of existing notes
        copyNotes.push({title, description})        // pushes an object in the copied arr

        // console.log(copyNotes);

        setNotes(copyNotes);                        // update the orginal state(notes)

        // console.log(notes);
        setTitle("");
        setDescription("");
        }
    }

    function deleteNote(index) {
        const copyNotes = [...notes]; // makes a copy of existing notes
        copyNotes.splice(index,1);  // delete obj based on index 
        setNotes(copyNotes);        //// update the orginal state(notes)
    }


    return (
        <>
            <div className="form-container">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="Enter Heading"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value = {title}
                    />
                    <textarea
                        placeholder="Enter Description"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <button type="submit">Add Note</button>
                </form>
            </div>
            <div className="notes-container">
                {notes.map((note,index)=> {
                    return (
                        <div key={index} className="note">
                            <p className="delete-note" onClick={()=>deleteNote(index)}>❌</p>
                            <h3>{note.title}</h3>
                            <p className="description">{note.description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}