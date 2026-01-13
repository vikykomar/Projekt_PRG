import {BrowserRouter, Routes, Route} from "react-router"

import TopBar from "./MainComponents/TopBar/Main"

import StrankaNenalezena from "./Routes/StrankaNenalezena/Main"

export default function Router (){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<StrankaNenalezena/>}/>    
                <Route element={<TopBar/>}>
                    <Route path="/" element={<div></div>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}