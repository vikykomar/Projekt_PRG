import Style from "./Main.module.css"

import { Link } from "react-router"

import { Kategorie as Kategorie_Seznam_Map } from "../../MainComponents/Produkty/Kategorie"
import { useMemo } from "react"

export default function Kategorie(){

    const Kategorie_Seznam_Array = useMemo(() => {return Array.from(Kategorie_Seznam_Map)}, [Kategorie_Seznam_Map])

    return(
        <div className="Content">
            <div className={Style.Kategorie_Seznam}>
                {Kategorie_Seznam_Array.map(([key, value]) => 
                    <Link to={`/Kategorie/${key}`} className={Style.Kategorie} key={key}> 
                        <img alt={value.Nazev} src={`/Kategorie_Img_Previews/${value.IMG_Preview}`}></img>
                        <h2>{value.Nazev}</h2>
                        <p>{value.Short_Description}</p>
                    </Link>
                )}
            </div>
        </div>
    )
}