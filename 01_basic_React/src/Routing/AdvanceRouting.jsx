import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Contact from "./Contact.jsx"
import NotFound from "./NotFound.jsx"
import Product from "./Product.jsx"
import MenClothes from "./MenClothes.jsx"
import WomenClothes from "./WomenClothes.jsx"
import Courses from "./Courses.jsx"
import CourseDetail from "./CourseDetail.jsx"
export default function AdvanceRouting() {

    let navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Product" element={<Product />}>
                    <Route path="MenClothes" element={<MenClothes />} />
                    <Route path="WomenClothes" element={<WomenClothes />} />
                </Route>
                <Route path="/Courses" element={<Courses />} />
                <Route path="/Courses/:id" element={<CourseDetail />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <div>
                <button onClick={() => navigate("/")}>Return to Home page</button>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate(+1)}>Next</button>
            </div>
            <Footer />
        </>
    )
}



{/* <Route path="/Product" element={<Product/>} /> */ }
{/* <Route path="/Product/MenClothes" element={<MenClothes/>} /> */ }
{/* <Route path="/Product/WomenCLothes" element={<WomenClothes/>} /> */ }