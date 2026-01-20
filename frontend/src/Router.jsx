import {BrowserRouter, Routes, Route, Outlet} from "react-router"

import Header from "./MainComponents/Header/Main"

import Domu from "./Routes/Domu/Main"
import Produkt from "./Routes/Produkt/Main"
import StrankaNenalezena from "./Routes/StrankaNenalezena/Main"

export default function Router (){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<StrankaNenalezena/>}/>    
                <Route element={<Header/>}>
                    <Route path="/" element={<Domu/>}/>
                    <Route path="/produkt/:UUID" element={<Produkt/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}