import { useState, useMemo } from "react";

import Kosik_Krok_1 from "./Krok_1";

import { Produkty } from "../../MainComponents/Produkty/Main"
import { Use_Kosik_Context } from "../../MainComponents/Kosik/Main"

export default function Kosik(){
    const [Krok, set_Krok] = useState(1)

    const use_Kosik = Use_Kosik_Context()

    const Produkty_V_Kosiku = useMemo(() => {
        const New_Produkty_V_Kosiku = []

        for (const [Produkt_UUID, Pocet_V_Kosiku] of use_Kosik.Kosik){
            let Nacteny_Produkt = Produkty.get(Produkt_UUID)

            if(Nacteny_Produkt !== undefined){
                Nacteny_Produkt.Pocet_V_Kosiku = Pocet_V_Kosiku

                New_Produkty_V_Kosiku.push([Produkt_UUID, Nacteny_Produkt])
            }
        }

        return New_Produkty_V_Kosiku
    }, [Produkty, use_Kosik.Kosik])

    return(
        <div className="Content">
            {Krok === 1 && <Kosik_Krok_1 Produkty_V_Kosiku={Produkty_V_Kosiku} set_Krok={set_Krok}/>}
        </div>
    )
}