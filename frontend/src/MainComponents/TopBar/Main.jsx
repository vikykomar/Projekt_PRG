import { NavLink, Outlet } from "react-router";

import Style from "./Main.module.css"

import ShoppingCartIcon from "../../Icons/ShoppingCart.svg"

export default function TopBar(){

    return (
        <>
            <div className={Style.Main_Bar}>
                <div className={Style.Logo_Container}>
                    <h1>Nejlepší Eshop</h1>
                </div>
                <div className={Style.Kosik_Container}>
                    <NavLink to={"/Kosik"}>Košík</NavLink>
                </div>
            </div>
            <Outlet/>
        </>
    )
}