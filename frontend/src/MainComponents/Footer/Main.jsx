import { Outlet } from "react-router";

export default function Footer(){

    return (
        <>
            <Outlet/>
            <footer className={"Footer"}>
                <strong>© 2026 Nejlepší Eshop.</strong>
            </footer>
        </>
    )
}