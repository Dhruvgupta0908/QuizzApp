
import { Route, Routes } from "react-router-dom"

import Home from "../../modules/quiz/Home"
import Register from "../../modules/user/pages/Register"
import Login from "@/modules/user/pages/login"
import NotFound from "../components/error"
import Feature from "@/modules/user/pages/Feature"
import AboutPage from "@/modules/user/pages/About"

const AppRoutes = () =>{
    return (<>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/features" element={<Feature/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    
    </>)
}

export default AppRoutes;