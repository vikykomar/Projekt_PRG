import { useMemo } from "react"
import { Use_Kosik_Context } from "../../MainComponents/Kosik/Main"
import Style from "./Krok_1.module.css"

import { Link } from "react-router"

export default function Kosik_Krok_1({Produkty_V_Kosiku, set_Krok}){
    const use_Kosik = Use_Kosik_Context()
    
    const Celkova_Cena = useMemo(() => Produkty_V_Kosiku.reduce((acc, Produkt) => acc + (Produkt[1].Cena * Produkt[1].Pocet_V_Kosiku), 0), [Produkty_V_Kosiku])
    const Nelze_Pokracovat = useMemo(() => Produkty_V_Kosiku.length <= 0 || Produkty_V_Kosiku.some((Produkt) => Produkt[1].Sklad < Produkt[1].Pocet_V_Kosiku), [Produkty_V_Kosiku])

    const ZmenitPocet = (UUID, Pocet) => {
        const Number_Pocet = Number(Pocet)

        if(Number_Pocet <= 0){
            return
        }

        use_Kosik.Nastavit(UUID, Number_Pocet)
    }

    const Smazat = (UUID) => {
        if(!confirm("Opravdu chcete odstranit tento produkt z košíku?")){
            return
        }

        use_Kosik.Nastavit(UUID, 0)
    }

    return(
        <>
            <table className={Style.Produkty}>
                <colgroup>
                    <col style={{width: "60%"}}/>
                    <col style={{width: "10%"}}/>
                    <col style={{width: "7%"}}/>
                    <col style={{width: "9%"}}/>
                    <col style={{width: "9%"}}/>
                    <col style={{width: "5%"}}/>
                </colgroup>
                <thead>
                    <tr>
                        <th className={Style.Left_Align}>Položka</th>
                        <th className={Style.Center_Align}>Dostupnost</th>
                        <th className={Style.Center_Align}>Množství</th>
                        <th className={Style.Center_Align}>Cena za kus</th>
                        <th className={Style.Center_Align}>Součet</th>
                        <th className={Style.Center_Align}>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {Produkty_V_Kosiku.map(([key, value]) => 
                        <tr key={key}>
                            <td className={Style.Left_Align}>
                                <Link to={`/Produkt/${key}`} className={Style.Polozka}>
                                    <img alt={value.Nazev} src={`/Produkty_Img_Previews/${value.IMG_Preview}`}></img>
                                    <h3>{value.Nazev}</h3>
                                </Link>
                            </td>
                            <td className={Style.Center_Align}>
                                <h3 style={{color: value.Sklad > 0 ? "green" : "red"}}>{value.Sklad > 0 ? "Skladem" : "Vyprodáno"}</h3>
                            </td>
                            <td className={Style.Center_Align}>
                                <input type="number" min={1} max={value.Sklad} value={value.Pocet_V_Kosiku} onChange={(e) => {ZmenitPocet(key, e.target.value)}}/>
                            </td>
                            <td className={Style.Center_Align}>
                                <h3>{value.Cena} Kč</h3>
                            </td>
                            <td className={Style.Center_Align}>
                                <h3>{value.Pocet_V_Kosiku * value.Cena} Kč</h3>
                            </td>
                            <td className={Style.Center_Align}>
                                <input type="button" value={"X"} onClick={() => {Smazat(key)}}/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className={Style.Celkova_Cena}>
                <strong>Celková cena: </strong>
                <strong className={Style.Big_Text}>{Celkova_Cena} Kč</strong>
            </div>

            <div className={Style.Pokracovat}>
                <input type="button" value={"Pokračovat"} disabled={Nelze_Pokracovat} onClick={() => {set_Krok(2)}}/>
            </div>
        </>
    )
}