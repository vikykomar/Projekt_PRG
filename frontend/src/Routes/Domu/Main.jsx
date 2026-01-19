import Style from "./Main.module.css"

import { Produkty } from "../../MainComponents/Produkty/Main"
import { useMemo } from "react"

export default function Domu(){

    const ProduktyArray = useMemo(() => {return Array.from(Produkty)}, [Produkty])

    return(
        <div className="Content">
            <h2>Produkty</h2>
            <div className={Style.Produkty}>
                {ProduktyArray.map(([key, value]) => 
                    <div className={Style.Produkt} key={key}>
                        <img alt={value.Nazev} src={`/Polozky_Img_Previews/${value.IMG_Preview}`}></img>
                        <h2>{value.Nazev}</h2>
                        <p>{value.Short_Description}</p>
                        <h3>{value.Cena} Kč</h3>
                    </div>
                )}
            </div>
        </div>
    )
}