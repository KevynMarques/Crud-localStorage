import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  MainBase, Tittle } from '../Components/divBase';
import { useState } from 'react';


export default ()=> {

  const [inputValue, setInputValue] = useState('')


const textInput = (e) => {
 return setInputValue(e.target.value); 
}; 

 const ciarTarefa = () =>{

  const li = React.createElement(<Tarefa />, 'cl')
   return(
     <></>
   );

 }
 
const exibirTarefa = () => {
}


 return (
<MainBase >
 <BlocoTarefas   >
   <Tittle>CRUD</Tittle>
   <DigitarTarefa    onChange={textInput} />

   <BotaoADD type='submit' onClick={exibirTarefa} >
      Adicionar tarefa 
   </BotaoADD>
 </BlocoTarefas>
</MainBase>


 ); 
}