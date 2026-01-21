import { Kosik_Context } from "./Main"

import { Produkty } from "../Produkty/Main"

import { useState, useCallback, useEffect, useRef } from "react"

export default function Kosik_Provider({children}){
    const isFirstRender = useRef(true)
    const [Kosik, Set_Kosik] = useState(new Map())

    useEffect(() => {
        if(isFirstRender.current === true){
            try{
                const Stored_Array = JSON.parse(localStorage.getItem("kosik"))
                
                if(Array.isArray(Stored_Array)){
                    Set_Kosik(new Map(Stored_Array))
                }
            }
            catch{}
            
            isFirstRender.current = false;
            return
        }

        localStorage.setItem("kosik", JSON.stringify(Array.from(Kosik)))
    }, [Kosik])

    const Pridat = useCallback((UUID, Pocet) => {
        if(!Produkty.has(UUID)){
            return
        }

        Set_Kosik(Previous_Kosik => {
            const Existing_Pocet = Previous_Kosik.get(UUID)

            const New_Kosik = new Map(Previous_Kosik); 

            const Number_To_Add = typeof Pocet === "number" && Pocet > 0 ? Pocet : 1

            if(Existing_Pocet !== undefined){
                New_Kosik.set(UUID, Existing_Pocet + Number_To_Add)
            }
            else {
                New_Kosik.set(UUID, Number_To_Add);
            }

            return New_Kosik
        })
    }, [])

    const Odebrat = useCallback((UUID, Pocet) => {
        Set_Kosik(Previous_Kosik => {
            const Existing_Pocet = Previous_Kosik.get(UUID)

            if(Existing_Pocet === undefined){
                return Previous_Kosik
            }

            const New_Kosik = new Map(Previous_Kosik); 

            const Number_To_Deduct = typeof Pocet === "number" && Pocet > 0 ? Pocet : 1

            if(Existing_Pocet - Number_To_Deduct > 0){
                New_Kosik.set(UUID, Existing_Pocet - Number_To_Deduct)
            }
            else {
                New_Kosik.delete(UUID);
            }

            return New_Kosik
        })
    }, [])


    return (
        <Kosik_Context.Provider value={{Kosik, Pridat, Odebrat}}>
            {children}
        </Kosik_Context.Provider>
    )
}