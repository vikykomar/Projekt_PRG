import { createContext, useContext} from 'react';

export const Kosik_Context = createContext()

export function Use_Kosik_Context(){  
    return useContext(Kosik_Context)
}