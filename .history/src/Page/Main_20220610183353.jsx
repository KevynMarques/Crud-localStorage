import { useState } from 'react';
import React from 'react';
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  MainBase, Tittle } from '../Components/divBase';
import { useState } from 'react';


export default ()=> {
 
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