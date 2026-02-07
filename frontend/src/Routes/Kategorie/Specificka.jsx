import { useEffect, useState, } from "react"
import { useNavigate, useParams, Link } from "react-router"

import { Produkty } from "../../MainComponents/Produkty/Main"
import { Use_Kosik_Context } from "../../MainComponents/Kosik/Main"

import { Kategorie as Kategorie_Seznam_Map } from "../../MainComponents/Produkty/Kategorie"

import Style from "./Specificka.module.css"

export default function Kategorie_Specificka(){
    const use_Kosik = Use_Kosik_Context()

    let navigate = useNavigate()
    const params = useParams()

    const [Kategorie, set_Kategorie] = useState([null, {Nazev: null, Description: null, IMG_Preview: null}])
    const [Produkty_Kategorie, set_Produkty_Kategorie] = useState([])

    useEffect(() => {
        if(params.UUID === undefined){
            return
        }

        const Nactena_Kategorie = Kategorie_Seznam_Map.get(params.UUID)

        if(Nactena_Kategorie === undefined){
            navigate("/")
            return
        }

        const Nactene_Produkty = (Array.from(Produkty)).filter((Produkt => Produkt[1].Kategorie === params.UUID))

        set_Kategorie([params.UUID, Nactena_Kategorie])
        set_Produkty_Kategorie(Nactene_Produkty)
    }, [Kategorie_Seznam_Map, Produkty, params.UUID])
    return(
        <div className="Content">
            <div className={Style.Info}>
                <h2>{Kategorie[1].Nazev}</h2>
                <p>{Kategorie[1].Description}</p>
            </div>
            <div className={Style.Produkty}>
                {Produkty_Kategorie.map(([key, value]) => 
                    <Link to={`/Produkt/${key}`} className={Style.Produkt} key={key}> 
                        <img alt={value.Nazev} src={`/Produkty_Img_Previews/${value.IMG_Preview}`}></img>
                        <h2>{value.Nazev}</h2>
                        <p>{value.Short_Description}</p>
                        <h3>{value.Cena} Kč</h3>
                    </Link>
                )}
            </div>
        </div>
    )
}