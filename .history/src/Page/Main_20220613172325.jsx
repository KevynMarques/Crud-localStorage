import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  MainBase, Tittle } from '../Components/divBase';
import { useState } from 'react';


export default ()=> {

  const [inputValue, setInputValue] = useState('')


const textInput = (e) => {
 return setInputValue(e.target.value); 
}; 
 
const exibirTarefa = () => {
  retur (
    console.log(e.target.value)

  );
}


 return (
<MainBase >
 <BlocoTarefas   >
   <Tittle>CRUD</Tittle>
   <DigitarTarefa  onChange={textInput} />

   <BotaoADD onClick={exibirTarefa} >
      Adicionar tarefa 
   </BotaoADD>

 </BlocoTarefas>
</MainBase>


 ); 
}