import React, {useContext, useEffect,useState} from 'react';
import {useForm} from 'react-hook-form'
import { FormContext,GlobalContext,FormStateType } from '../../utils/context/context';




function App() {
  const {register,handleSubmit} = useForm(); 

  const [data,setData] = useState();

  const {formInf,setFormInf} = useContext(GlobalContext)

  const onSubmit = (data: any) => {
    console.log(data)
    console.log(formInf)
  setFormInf(data)
  }
  return (
 
    
    <div className="App">
    <form onSubmit={handleSubmit(onSubmit)} className="joao">
<input {...register("name")} type="text"/>
<input {...register("email")}  type="text" />
<input {...register("pass")}  type="text"/>
<button type="submit" >submit</button>

    </form>
    </div>


  );
}

export default App;
