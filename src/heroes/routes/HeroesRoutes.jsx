import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { MarvelPage, DcPage, FrontPage, AnimePage } from "../pages"
import { Navbar,Footer } from "../../ui"


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="frontPage" element={<FrontPage />} />

                    <Route path="anime" element={<AnimePage />} />
                    <Route path="/*" element={<Navigate to="/FrontPage" />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}
