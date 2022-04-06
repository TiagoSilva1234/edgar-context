import React, {useContext, useEffect,useState} from 'react';
import {useForm} from 'react-hook-form'
import { FormContext,GlobalContext,FormStateType } from './utils/context/context';
import Text from './components/text'
import Form from './components/form'


function App() {

  return (
 <FormContext>
   <Form/>
    <Text/>
    </FormContext>
  );
}

export default App;
