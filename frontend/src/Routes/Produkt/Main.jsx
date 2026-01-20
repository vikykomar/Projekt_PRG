import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

import { Produkty } from "../../MainComponents/Produkty/Main"
import { Use_Kosik_Context } from "../../MainComponents/Kosik/Main"

import Style from "./Main.module.css"

export default function Produkt(){
    const use_Kosik = Use_Kosik_Context()

    let navigate = useNavigate()
    const params = useParams()

    const [Produkt, set_Produkt] = useState([null, {Nazev: null, Sklad: null, Cena: null, Description: null, Short_Description: null, IMG_Preview: null, IMG: []}])

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
    }, [Produkty])

    console.log(use_Kosik.Kosik)

    const Pridat_Do_Kosiku = () => {
        use_Kosik.Pridat(Produkt[0], 1)
    }

    return(
        <div className="Content">
            <div className={Style.Product_And_Description}>
                <img src={`/Produkty_Img/${Produkt[1].IMG[0]}`}/>
                <div className={Style.Description}>
                    <h1>{Produkt[1].Nazev}</h1>
                    <h3 className={Produkt[1].Sklad <= 0 ? Style.Vyprodano : Style.Skladem}>{Produkt[1].Sklad <= 0 ? "Vyprodáno" : `Skladem: ${Produkt[1].Sklad} Ks`}</h3>
                    <input type="button" className={Style.Pridat_Do_Kosiku} onClick={Pridat_Do_Kosiku} value={"Přidat do košíku"}/>
                </div>
            </div>
        </div>
    )
}