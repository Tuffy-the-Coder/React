import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <h2>Navbar</h2>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Product">Product</Link>
            <Link to="/Courses">Courses</Link>
        </div>)
}