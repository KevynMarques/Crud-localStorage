import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  
MainBase, Tittle, Delete } from '../Components/divBase';
import { useState } from 'react';


export default ()=> {
  const [lista, setLista] = useState([])
  const [inputValue, setInputValue] = useState('')


const textInput = (e) => {
 return setInputValue(e.target.value); 
}; 


const exibirTarefa = () => {
    if(setInputValue('')){
          alert('teste')
    } else {
      setLista([...lista, inputValue]) 
    }
}


 return (
<MainBase >
 <BlocoTarefas   >
   <Tittle>CRUD</Tittle>
   <DigitarTarefa  onChange={textInput} />

   <BotaoADD type='submit' onClick={exibirTarefa} >
      Adicionar tarefa 
   </BotaoADD>

<ul>
  {lista.map(item => 
  <Tarefa>
    {item}
    <Delete>Deletar</Delete>
  </Tarefa>)}
</ul>

 </BlocoTarefas>
</MainBase>


 ); 
}