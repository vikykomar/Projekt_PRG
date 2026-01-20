import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router"

import { Produkty } from "../../MainComponents/Produkty/Main"

export default function Produkt(){
    let navigate = useNavigate()
    const params = useParams()

    const [Produkt, set_Produkt] = useState([null, {Nazev: null, Cena: null, Short_Description: null, IMG_Preview: null, IMG: []}])

    useEffect(() => {
        if(params.UUID === undefined){
            return
        }

        const NactenyProdukt = Produkty.get(params.UUID)

        if(NactenyProdukt === undefined){
            navigate("/")
            return
        }

        set_Produkt(NactenyProdukt)
    }, [Produkty])

    return(
        <div className="Content">

        </div>
    )
}