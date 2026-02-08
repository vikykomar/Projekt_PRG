import { useState, useMemo, useEffect } from "react";

import Kosik_Krok_1 from "./Krok_1";
import Kosik_Krok_2 from "./Krok_2";
import Kosik_Krok_3 from "./Krok_3";
import Kosik_Krok_4 from "./Krok_4";

import { Produkty } from "../../MainComponents/Produkty/Main"
import { Use_Kosik_Context } from "../../MainComponents/Kosik/Main"
import { Dopravci } from "../../MainComponents/Dopravci/Main";

export default function Kosik(){
    const [Krok, set_Krok] = useState(1)
    const [Osobni_Udaje, set_Osobni_Udaje] = useState({Jmeno_A_Prijmeni: "", Email: "", Adresa: "", Mesto: "", PSC: ""})
    const [Dopravce_UUID, set_Dopravce_UUID] = useState(null)

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

    const Dopravce = useMemo(() => {
        const Nacteny_Dopravce = Dopravci.get(Dopravce_UUID)

        if(Nacteny_Dopravce === undefined){
            return [null, null]
        }

        return [Dopravce_UUID, Nacteny_Dopravce]
    }, [Dopravci, Dopravce_UUID])

    return(
        <div className="Content">
            {Krok === 1 && <Kosik_Krok_1 Produkty_V_Kosiku={Produkty_V_Kosiku} set_Krok={set_Krok}/>}
            {Krok === 2 && <Kosik_Krok_2 set_Krok={set_Krok} Dopravce_UUID={Dopravce_UUID} set_Dopravce_UUID={set_Dopravce_UUID} Osobni_Udaje={Osobni_Udaje} set_Osobni_Udaje={set_Osobni_Udaje}/>}
            {Krok === 3 && <Kosik_Krok_3 set_Krok={set_Krok} Dopravce={Dopravce} Osobni_Udaje={Osobni_Udaje} Produkty_V_Kosiku={Produkty_V_Kosiku}/>}
            {Krok === 4 && <Kosik_Krok_4/>}
        </div>
    )
}