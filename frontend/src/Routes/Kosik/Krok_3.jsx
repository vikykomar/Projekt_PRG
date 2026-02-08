import {useMemo } from "react"

import Style from "./Krok_3.module.css"

import { Use_Kosik_Context } from "../../MainComponents/Kosik/Main"

export default function Kosik_Krok_3({set_Krok, Dopravce, Osobni_Udaje, Produkty_V_Kosiku}){
    const use_Kosik = Use_Kosik_Context()

    const Nelze_Objednat = useMemo(() => Dopravce[0] === null || Produkty_V_Kosiku.length <= 0 || Produkty_V_Kosiku.some((Produkt) => Produkt[1].Sklad < Produkt[1].Pocet_V_Kosiku), [Produkty_V_Kosiku])

    const Celkova_Cena = useMemo(() => Produkty_V_Kosiku.reduce((acc, Produkt) => acc + (Produkt[1].Cena * Produkt[1].Pocet_V_Kosiku), 0) + Dopravce[1].Cena, [Produkty_V_Kosiku, Dopravce])

    const Zpet = () => {
        if(!confirm("Opravdu se chcete vrátit o krok zpět?")){
            return
        }

        set_Krok(2)
    }

    const Objednat = () => {
        use_Kosik.Clear()

        set_Krok(4)
    }

    return(
        <>
          <h3>Rekapitulace objednávky</h3>
          <table className={Style.Produkty}>
                <colgroup>
                    <col style={{width: "60%"}}/>
                    <col style={{width: "10%"}}/>
                    <col style={{width: "10%"}}/>
                    <col style={{width: "10%"}}/>
                    <col style={{width: "10%"}}/>
                </colgroup>
                <thead>
                    <tr>
                        <th className={Style.Left_Align}>Položka</th>
                        <th className={Style.Center_Align}>Dostupnost</th>
                        <th className={Style.Center_Align}>Množství</th>
                        <th className={Style.Center_Align}>Cena za kus</th>
                        <th className={Style.Center_Align}>Součet</th>
                    </tr>
                </thead>
                <tbody>
                    {Produkty_V_Kosiku.map(([key, value]) => 
                        <tr key={key}>
                            <td className={`${Style.Left_Align} ${Style.Polozka}`}>
                                <img alt={value.Nazev} src={`/Produkty_Img_Previews/${value.IMG_Preview}`}></img>
                                <h3>{value.Nazev}</h3>
                            </td>
                            <td className={Style.Center_Align}>
                                <h3 style={{color: value.Sklad > 0 ? "green" : "red"}}>{value.Sklad > 0 ? "Skladem" : "Vyprodáno"}</h3>
                            </td>
                            <td className={Style.Center_Align}>
                                <h3>{value.Pocet_V_Kosiku}</h3>
                            </td>
                            <td className={Style.Center_Align}>
                                <h3>{value.Cena} Kč</h3>
                            </td>
                            <td className={Style.Center_Align}>
                                <h3>{value.Pocet_V_Kosiku * value.Cena} Kč</h3>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <h4>Vaše údaje:</h4>
            <table className={Style.Osobni_Udaje}>
                <colgroup>
                    <col style={{width:"200px"}}/>
                    <col/>
                </colgroup>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="jmenoaprijmeni">Jméno a Příjmení:</label>
                        </td>
                        <td>
                            <strong id="jmenoaprijmeni">{Osobni_Udaje.Jmeno_A_Prijmeni}</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="email">Email:</label>
                        </td>
                        <td>
                            <strong id="email">{Osobni_Udaje.Email}</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="adresa">Adresa:</label>
                        </td>
                        <td>
                            <strong id="adresa">{Osobni_Udaje.Adresa}</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="mesto">Město:</label>
                        </td>
                        <td>
                            <strong id="mesto">{Osobni_Udaje.Mesto}</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="psc">PSČ:</label>
                        </td>
                        <td>
                            <strong id="psc">{Osobni_Udaje.PSC}</strong>
                        </td>
                    </tr>
                </tbody>

            </table>
            <h4>Dopravce</h4>
            <table className={Style.Dopravce}>
                <colgroup>
                    <col style={{width: "80%"}}/>
                    <col style={{width: "20%"}}/>
                </colgroup>
                <tbody>
                    <tr>
                        <td className={Style.Left_Align}>
                            <strong>{Dopravce[1].Nazev}</strong>
                        </td>
                        <td className={Style.Right_Align}>{Dopravce[1].Cena} Kč</td>
                    </tr>
                </tbody>
            </table>
            <div className={Style.Celkova_Cena}>
                <strong>Celková cena: </strong>
                <strong className={Style.Big_Text}>{Celkova_Cena} Kč</strong>
            </div>
            <div className={Style.Zpet_Nebo_Objednat}>
                <input type="button" className={Style.Zpet} value={"Zpět"} onClick={Zpet}/>
                <input type="button" className={Style.Objednat} disabled={Nelze_Objednat} value={"Objednat"} onClick={Objednat}/>
            </div>
        </>
    )
}