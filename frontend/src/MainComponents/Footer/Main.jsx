import { useMemo } from "react";
import { NavLink, Outlet } from "react-router";

import { Use_Kosik_Context } from "../../MainComponents/Kosik/Main"

import ShoppingCart from "../../Icons/ShoppingCart.svg"

import Style from "./Main.module.css"

export default function Footer(){
    const use_Kosik = Use_Kosik_Context()

    const Pocet_V_Kosiku = useMemo(() => {return use_Kosik.Kosik.values().reduce((sum, value) => sum + value, 0);}, [use_Kosik.Kosik])

    return (
        <>
            <Outlet/>
            <footer className={"Footer"}>
                <strong>© 2026 Nejlepší Eshop.</strong>
            </footer>
        </>
    )
}