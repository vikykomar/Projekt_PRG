import {BrowserRouter, Routes, Route, Outlet} from "react-router"

import Header from "./MainComponents/Header/Main"
import Footer from "./MainComponents/Footer/Main"

import Domu from "./Routes/Domu/Main"
import Kategorie from "./Routes/Kategorie/Main"
import Kategorie_Specificka from "./Routes/Kategorie/Specificka"

import Produkt from "./Routes/Produkt/Main"

import Kosik from "./Routes/Kosik/Main"

import StrankaNenalezena from "./Routes/StrankaNenalezena/Main"

export default function Router (){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<StrankaNenalezena/>}/>    
                <Route element={<Header/>}>
                    <Route element={<Footer/>}>
                        <Route path="/" element={<Domu/>}/>
                        <Route path="/Kategorie" element={<Kategorie/>}/>
                        <Route path="/Kategorie/:UUID" element={<Kategorie_Specificka/>}/>
                        <Route path="/Produkt/:UUID" element={<Produkt/>}/>
                        <Route path="/Kosik" element={<Kosik/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}