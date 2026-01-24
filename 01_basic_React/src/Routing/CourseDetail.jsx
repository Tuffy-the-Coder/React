import { useParams } from "react-router-dom"

export default function CourseDetail() {

    const params = useParams();
    console.log(params.id);
    
    return (
        <h1>{params.id} Course Details</h1>
    )
}