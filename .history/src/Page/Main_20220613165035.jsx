import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  MainBase, Tittle } from '../Components/divBase';
import { useState } from 'react';


export default ()=> {

  const [listValues, setListValues] = useState({})

 const Envio = (e) => {
  e.preventDefault(); 
  const listData = new ListData(e.t)

  console.log('Envio')
 }; 

 return (
<MainBase >
 <BlocoTarefas onSubmit={Envio} >
   <Tittle>CRUD</Tittle>
   <DigitarTarefa />

   <BotaoADD type='submit' >
      Adicionar tarefa 
   </BotaoADD>

 </BlocoTarefas>
</MainBase>


 ); 
}