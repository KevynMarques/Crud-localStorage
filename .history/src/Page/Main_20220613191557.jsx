import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  MainBase, Tittle } from '../Components/divBase';
import { useState } from 'react';


export default ()=> {
  const [lista, setLista] = useState([])
  const [inputValue, setInputValue] = useState('')


const textInput = (e) => {
 return setInputValue(e.target.value); 
}; 


const exibirTarefa = () => {
  return ( 
   setLista([...lista, inputValue])  
   );
}


 return (
<MainBase >
 <BlocoTarefas   >
   <Tittle>CRUD</Tittle>
   <DigitarTarefa  onChange={textInput}  rows="2" cols="20" wrap="hard" />

   <BotaoADD type='submit' onClick={exibirTarefa} >
      Adicionar tarefa 
   </BotaoADD>

<ul>
  {lista.map(item => <Tarefa>{item}</Tarefa>)}
</ul>

 </BlocoTarefas>
</MainBase>


 ); 
}