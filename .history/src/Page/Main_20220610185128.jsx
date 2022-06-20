import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  MainBase, Tittle } from '../Components/divBase';
import { useState } from 'react';


export default ()=> {

 const Envio = (e) => {
  e.preventDefault(); 

  console.log('Envio')
 }; 

 return (
<MainBase  onSubmit={Envio}  >
 <BlocoTarefas >
   <Tittle>CRUD</Tittle>
   <DigitarTarefa />

   <BotaoADD type='submit' >
      Adicionar tarefa 
   </BotaoADD>

 </BlocoTarefas>
</MainBase>


 ); 
}