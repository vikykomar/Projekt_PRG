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
                    <Route path="/Kategorie" element={<a>Stranka seznamu kategorii</a>}/>
                    <Route path="/Kategorie/:UUID" element={<a>Stranka specificke kategorie</a>}/>
                    <Route path="/Produkt/:UUID" element={<Produkt/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}