import { useMemo } from "react"

import Style from "./Krok_2.module.css"

import { Dopravci } from "../../MainComponents/Dopravci/Main"

export default function Kosik_Krok_2({set_Krok, Dopravce_UUID, set_Dopravce_UUID, Osobni_Udaje, set_Osobni_Udaje}){
    const Dopravci_Seznam_Array = useMemo(() => {return Array.from(Dopravci)}, [Dopravci])

    const Nelze_Pokracovat = useMemo(() => Dopravci.has(Dopravce_UUID) === false || Osobni_Udaje.Jmeno_A_Prijmeni.length <= 0 || Osobni_Udaje.Email.length <= 0 || Osobni_Udaje.Adresa.length <= 0 || Osobni_Udaje.Mesto.length <= 0 || Osobni_Udaje.PSC.length <= 0, [Dopravci, Dopravce_UUID, Osobni_Udaje])

    const Zpet = () => {
        if(!confirm("Opravdu se chcete vrátit o krok zpět?")){
            return
        }

        set_Krok(1)
    }

    return(
        <>
            <h4>Vaše údaje:</h4>
            <table className={Style.Osobni_Udaje}>
                <colgroup>
                    <col style={{width:"150px"}}/>
                    <col/>
                </colgroup>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="jmenoaprijmeni">Jméno a Příjmení:</label>
                        </td>
                        <td>
                            <input type="input" id="jmenoaprijmeni" value={Osobni_Udaje.Jmeno_A_Prijmeni} onChange={(e) => {set_Osobni_Udaje((Previous_Osobni_Udaje => {return {...Previous_Osobni_Udaje, Jmeno_A_Prijmeni: e.target.value}}))}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="email">Email:</label>
                        </td>
                        <td>
                            <input type="email" id="email" value={Osobni_Udaje.Email} onChange={(e) => {set_Osobni_Udaje((Previous_Osobni_Udaje => {return {...Previous_Osobni_Udaje, Email: e.target.value}}))}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="adresa">Adresa:</label>
                        </td>
                        <td>
                            <input type="input" id="adresa" value={Osobni_Udaje.Adresa} onChange={(e) => {set_Osobni_Udaje((Previous_Osobni_Udaje => {return {...Previous_Osobni_Udaje, Adresa: e.target.value}}))}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="mesto">Město:</label>
                        </td>
                        <td>
                            <input type="input" id="mesto" value={Osobni_Udaje.Mesto} onChange={(e) => {set_Osobni_Udaje((Previous_Osobni_Udaje => {return {...Previous_Osobni_Udaje, Mesto: e.target.value}}))}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="psc">PSČ:</label>
                        </td>
                        <td>
                            <input type="input" id="psc" value={Osobni_Udaje.PSC} onChange={(e) => {set_Osobni_Udaje((Previous_Osobni_Udaje => {return {...Previous_Osobni_Udaje, PSC: e.target.value}}))}}/>
                        </td>
                    </tr>
                </tbody>

            </table>
            <h4>Vyberte dopravce:</h4>
            <table className={Style.Dopravci}>
                <colgroup>
                    <col style={{width: "80%"}}/>
                    <col style={{width: "20%"}}/>
                </colgroup>
                <tbody>
                    {Dopravci_Seznam_Array.map(([key, value]) => 
                        <tr key={`dopravce-${key}`} >
                            <td className={Style.Center_Align}>
                                <input checked={key === Dopravce_UUID} id={`dopravce-${key}`} type="radio" onClick={() => {set_Dopravce_UUID(key)}}/>
                                <label htmlFor={`dopravce-${key}`}>{value.Nazev}</label>
                            </td>
                            <td className={Style.Right_Align}>{value.Cena} Kč</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className={Style.Zpet_Nebo_Pokracovat}>
                <input type="button" className={Style.Zpet} value={"Zpět"} onClick={Zpet}/>
                <input type="button" className={Style.Pokracovat} disabled={Nelze_Pokracovat} value={"Pokračovat"} onClick={() => {set_Krok(3)}}/>
            </div>
        </>
    )
}