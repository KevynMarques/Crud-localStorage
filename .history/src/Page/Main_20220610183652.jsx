import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  MainBase, Tittle } from '../Components/divBase';
import { useState } from 'react';


export default ()=> {
 const[valueInput,  setValueInput]=useState ''; 
 return (
<MainBase >
 <BlocoTarefas>
   <Tittle>CRUD</Tittle>
   <DigitarTarefa/>
   <BotaoADD>Adicionar tarefa</BotaoADD>
 </BlocoTarefas>
</MainBase>


 ); 
}