import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EstudiantesPage } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EstudiantesPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router