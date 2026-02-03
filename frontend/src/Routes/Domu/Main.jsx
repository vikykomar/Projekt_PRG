import Style from "./Main.module.css"

import { Kategorie } from "../../MainComponents/Produkty/Kategorie"
import {Vybrane_Produkty} from "../../MainComponents/Produkty/VybraneProdukty"
import { Produkty } from "../../MainComponents/Produkty/Main"
import { useMemo } from "react"
import { Link } from "react-router"

export default function Domu(){

    const KategorieArray = useMemo(() => {return Array.from(Kategorie)}, [Kategorie])

    const Vybrane_Produkty_Array = useMemo(() => {
        const New_Vybrane_Produkty_Array = []

        for (const Produkt_UUID of Vybrane_Produkty){
            const Nacteny_Produkt = Produkty.get(Produkt_UUID)

            if(Nacteny_Produkt !== undefined){
                New_Vybrane_Produkty_Array.push([Produkt_UUID, Nacteny_Produkt])
            }
        }

        return New_Vybrane_Produkty_Array
    }, [Produkty])

    return(
        <div className="Content">
            <h2>Kategorie</h2>
            <div className={Style.KategorieSeznam}>
                {KategorieArray.map(([key, value]) => 
                    <Link to={`/Kategorie/${key}`} className={Style.Kategorie} key={key}> 
                        <h2>{value.Nazev}</h2>
                    </Link>
                )}              
            </div>
            <h2>Doporučené produkty</h2>
            <div className={Style.Produkty}>
                {Vybrane_Produkty_Array.map(([key, value]) => 
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