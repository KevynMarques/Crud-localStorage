import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  MainBase, Tittle } from '../Components/divBase';
import { useState } from 'react';


export default ()=> {

 const[value, setValue]=useState (''); 

 const Envio = (e) => {
  e.preventDefault(); 
 }; 

 return (
<MainBase >
 <BlocoTarefas onSubmit={Evio}>
   <Tittle>CRUD</Tittle>
   <DigitarTarefa/>

   <BotaoADD type='submit'>
      Adicionar tarefa 
   </BotaoADD>

 </BlocoTarefas>
</MainBase>


 ); 
}