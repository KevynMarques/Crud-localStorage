import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD MainBase, Tittle } from '../Components/divBase';


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