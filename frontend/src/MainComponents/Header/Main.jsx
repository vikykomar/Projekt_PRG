import { NavLink, Outlet } from "react-router";

import Style from "./Main.module.css"

export default function Header(){

    return (
        <>
            <header className={"Header"}>
                <div className={Style.Elements_Left}>
                    <div className={Style.Logo_Container}>
                        <h1>Nejlepší Eshop</h1>
                    </div>
                    <div className={Style.Page_Links}>
                        <NavLink to={"/"}>Domů</NavLink>
                        <NavLink to={"/Kategorie"}>Kategorie</NavLink>
                        <NavLink to={"/ObchodniPodminky"}>Obchodní podmínky</NavLink>
                        <NavLink to={"/Kontakty"}>Kontaky</NavLink>
                    </div>
                </div>
                <div className={Style.Elements_Right}>
                    <NavLink to={"/Kosik"}>Košík</NavLink>
                </div>
            </header>
            <Outlet/>
        </>
    )
}