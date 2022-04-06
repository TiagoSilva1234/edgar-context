import React,{ createContext,ReactNode, useState } from 'react';



type ContextProps = {
    children: ReactNode;
}


type obj = {
    name:string,
    email:string,
    pass:string,
}

export type FormStateType = {
    formInf: obj,
    setFormInf: (newState:obj) => void
}


const formStatedefault ={
    formInf:{name: "",email:"",pass:""},
    setFormInf: ()=> {},
}

export const GlobalContext = createContext<FormStateType>(formStatedefault);


export const FormContext = ({children}: ContextProps) =>{

    const [formInf,setFormInf] = useState(formStatedefault.formInf)

    return(
        <GlobalContext.Provider value={{formInf,setFormInf}}>
         {children}
        </GlobalContext.Provider>
    );

}