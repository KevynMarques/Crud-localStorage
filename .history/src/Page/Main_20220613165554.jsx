import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  MainBase, Tittle } from '../Components/divBase';
import { useState } from 'react';


export default ()=> {
 const Envio = (e) => {
   e.preventDefault(); 
    console.log
 }; 

 return (
<MainBase >
 <BlocoTarefas  onSubmit={Envio}  >
   <Tittle>CRUD</Tittle>
   <DigitarTarefa />

   <BotaoADD type='submit' >
      Adicionar tarefa 
   </BotaoADD>

 </BlocoTarefas>
</MainBase>


 ); 
}