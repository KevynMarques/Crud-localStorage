import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  MainBase, Tittle } from '../Components/divBase';
import { useState } from 'react';


export default ()=> {

  const [listValues, setListValues] = useState({}); 

 const Envio = (e) => {
      const {target} = e; 
      const 
 }; 

 return (
<MainBase >
 <BlocoTarefas  >
   <Tittle>CRUD</Tittle>
   <DigitarTarefa  />

   <BotaoADD type='submit' >
      Adicionar tarefa 
   </BotaoADD>

 </BlocoTarefas>
</MainBase>


 ); 
}