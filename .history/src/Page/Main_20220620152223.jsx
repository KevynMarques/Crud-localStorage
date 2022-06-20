import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  
MainBase, Tittle, Delete } from '../Components/divBase';
import { useState, useEffect } from 'react';


export default ()=> {


  const [lista, setLista] =  useState([])
  const [inputValue, setInputValue] = useState('');


  const testando = ()=>{
    localStorage.setItem('listando', JSON.stringify(lista));
  }  

  testando(); 

  const exibirTarefa = () => {
    setLista([...lista, inputValue]);
    setInputValue(''); 
  };





const DeletarItem = (index) => {
  const arrayTemporario = [...lista] ; 
  arrayTemporario.splice(index,1)
  setLista(arrayTemporario); 
  testando(); 
}



// ------------------------ LOCAL STORAGE ==========--------------------------------------------------


const addSalvas =  ()=>{
  const arrUm =  localStorage.getItem('listando'); 
   const arr = JSON.parse(arrUm);
}
addSalvas();




 return (
<MainBase >
 <BlocoTarefas   >
   <Tittle>CRUD</Tittle>
   <DigitarTarefa  placeholder=' Digite uma tarefa...'  value={inputValue} />

   <BotaoADD type='submit' onClick={exibirTarefa}  disabled={inputValue ==='' ? true : false} >
      Adicionar tarefa 
   </BotaoADD>

<ul>
  {lista.map((item, index) => 
  <Tarefa key={index} >
    {item }
    <Delete onClick={DeletarItem}>
      Deletar
    </Delete>
  </Tarefa>)}
</ul>

 </BlocoTarefas>
</MainBase>


 ); 
}