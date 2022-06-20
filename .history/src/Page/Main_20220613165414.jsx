import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  MainBase, Tittle } from '../Components/divBase';
import { useState } from 'react';


export default ()=> {
 const 

 return (
<MainBase >
 <BlocoTarefas >
   <Tittle>CRUD</Tittle>
   <DigitarTarefa  onSubmit={Envio}  />

   <BotaoADD type='submit' >
      Adicionar tarefa 
   </BotaoADD>

 </BlocoTarefas>
</MainBase>


 ); 
}