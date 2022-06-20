import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  MainBase, Tittle } from '../Components/divBase';
import { useState } from 'react';


export default ()=> {

  const [listValues, setListValues] = useState({}); 

 const Envio = (e) => {
      const {target} = e; 
 }; 

 return (
<MainBase >
 <BlocoTarefas type="text" name="tarefa" onChange={Envio} >
   <Tittle>CRUD</Tittle>
   <DigitarTarefa  />

   <BotaoADD type='submit' >
      Adicionar tarefa 
   </BotaoADD>

 </BlocoTarefas>
</MainBase>


 ); 
}