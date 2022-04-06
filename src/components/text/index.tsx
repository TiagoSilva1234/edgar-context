import * as React from 'react';
import react,{useContext} from 'react';
import { FormContext,GlobalContext} from '../../utils/context/context';


const Text = ()=>{

    const {formInf,setFormInf} = useContext(GlobalContext);

    return(
    
    
        <>
        {Object.values(formInf).map((e)=>
         <p>{e}</p>
        )}

        </>

    )
}
export default Text;