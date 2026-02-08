import Style from "./Main.module.css"

export default function Kontakty(){
    return(
        <div className="Content">
            <div className={Style.Kontakni_Informace}>
                <h2>Kontaktní informace</h2>
                <p>Nejlepší Esop s.r.o. <br></br> Rožnov pod Radhoštěm</p>
            </div>
            <div className={Style.Oteviraceni_Dobra}>
                <h2>Otevírací doba</h2>
                <table>
                    <colgroup>
                        <col style={{width: "80px"}}/>
                        <col/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <td className={Style.Den}>Pondělí:</td>
                            <td>15:00-16:00</td>
                        </tr>
                        <tr>
                            <td className={Style.Den}>Úterý:</td>
                            <td>15:00-16:00</td>
                        </tr>
                        <tr>
                            <td className={Style.Den}>Středa:</td>
                            <td>15:00-16:00</td>
                        </tr>
                        <tr>
                            <td className={Style.Den}>Čtvrtek:</td>
                            <td>15:00-16:00</td>
                        </tr>
                        <tr>
                            <td className={Style.Den}>Pátek:</td>
                            <td>15:00-16:00</td>
                        </tr>
                        <tr>
                            <td className={Style.Den}>Sobota:</td>
                            <td>Zavřeno</td>
                        </tr>
                        <tr>
                            <td className={Style.Den}>Neděle:</td>
                            <td>Zavřeno</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </div>
    )
}