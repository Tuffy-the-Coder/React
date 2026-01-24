import { Link, Outlet } from "react-router-dom";

export default function Product() {
    return (
        <>
            <Link to="/Product/MenClothes">Men Clothes</Link>
            <Link to="/Product/WomenClothes">Women Clothes</Link>
            <Outlet />
        </>
    )
}