import { useMemo } from "react";
import { NavLink, Outlet } from "react-router";

import { Use_Kosik_Context } from "../../MainComponents/Kosik/Main"

import Style from "./Main.module.css"

export default function Header(){
    const use_Kosik = Use_Kosik_Context()

    const Pocet_V_Kosiku = useMemo(() => {return use_Kosik.Kosik.values().reduce((sum, value) => sum + value, 0);}, [use_Kosik.Kosik])

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
                    <NavLink to={"/Kosik"}>Košík ({Pocet_V_Kosiku})</NavLink>
                </div>
            </header>
            <Outlet/>
        </>
    )
}