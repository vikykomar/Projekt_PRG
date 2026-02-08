import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router"

import { Produkty } from "../../MainComponents/Produkty/Main"
import { Use_Kosik_Context } from "../../MainComponents/Kosik/Main"

import Style from "./Main.module.css"

export default function Produkt(){
    const use_Kosik = Use_Kosik_Context()

    let navigate = useNavigate()
    const params = useParams()

    const [Produkt, set_Produkt] = useState([null, {Nazev: null, Sklad: null, Cena: null, Description: null, Short_Description: null, IMG_Preview: null, IMG: []}])
    const Pocet_V_Kosiku = useMemo(() => {if(params.UUID === undefined) return 0; const Pocet = use_Kosik.Kosik.get(params.UUID); return Pocet === undefined ? 0 : Pocet}, [use_Kosik.Kosik, params.UUID])

    const [Current_IMG, set_Current_IMG] = useState(0)

    useEffect(() => {
        if(params.UUID === undefined){
            return
        }

        const NactenyProdukt = Produkty.get(params.UUID)

        if(NactenyProdukt === undefined){
            navigate("/")
            return
        }

        set_Produkt([params.UUID, NactenyProdukt])
    }, [Produkty, params.UUID])

    const Pridat_Do_Kosiku = () => {
        use_Kosik.Pridat(Produkt[0], 1)
    }

    const Odebrat_Z_Kosiku = () => {
        use_Kosik.Odebrat(Produkt[0], 1)    
    }

    const IMG_Predchozi = () => {
        set_Current_IMG((Previous_Current_IMG) => {
            if(Previous_Current_IMG <= 0){
                return Produkt[1].IMG.length - 1
            }

            return Previous_Current_IMG - 1
        })
    }

    const IMG_Dalsi = () => {
        set_Current_IMG((Previous_Current_IMG) => {
            if(Previous_Current_IMG + 1 >= Produkt[1].IMG.length){
                return 0
            }

            return Previous_Current_IMG + 1
        })
    }

    return(
        <div className="Content">
            <div className={Style.Produkt}>
                <div className={Style.IMG_Container}>
                    <img src={`/Produkty_Img/${Produkt[1].IMG[Current_IMG]}`} alt={Produkt[1].Nazev}/>


                    <input className={`${Style.Navigace} ${Style.Predchozi}`} type="button" value={"‹"} onClick={IMG_Predchozi}/>
                    <input className={`${Style.Navigace} ${Style.Dalsi}`} type="button" value={"›"} onClick={IMG_Dalsi}/>
                </div>
                <div className={Style.Info}>
                    <h1>{Produkt[1].Nazev}</h1>
                    <h3 className={Produkt[1].Sklad <= 0 ? Style.Vyprodano : Style.Skladem}>{Produkt[1].Sklad <= 0 ? "Vyprodáno" : `Skladem: ${Produkt[1].Sklad} Ks`}</h3>
                    <p className={Style.Description}>{Produkt[1].Description}</p>
                    <div className={Style.Ovladani_Kosiku_Container}>
                        {Pocet_V_Kosiku <= 0 &&<input type="button" className={Style.Pridat_Do_Kosiku} onClick={Pridat_Do_Kosiku} value={"Přidat do košíku"}/>}
                        {Pocet_V_Kosiku > 0 && <>
                            <input type="button" onClick={Odebrat_Z_Kosiku} value={"-"}></input>
                            <strong>{Pocet_V_Kosiku} v košíku</strong>
                            <input type="button" onClick={Pridat_Do_Kosiku} disabled={Pocet_V_Kosiku >= Produkt[1].Sklad} value={"+"}></input>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}