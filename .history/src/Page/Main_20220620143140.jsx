import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  
MainBase, Tittle, Delete } from '../Components/divBase';
import { useState, useEffect } from 'react';


export default ()=> {


  const [lista, setLista] =  useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(()=>{
    const testando =  localStorage.setItem('listando', JSON.stringify(lista));

  },[lista])
 
  const addSalvas = ()=>{
     const test = localStorage.getItem('listando'); 
     const test2 = JSON.parse(test);

     for(tt of test2) {
        exibirTarefa();   
     }
     console.log(test2); 
  }

  addSalvas(); 

  const exibirTarefa = () => {
    setLista([...lista, inputValue]);
    setInputValue(''); 
  };




 const textInput =  (e) => {
  setInputValue(e.target.value); 
}; 



const DeletarItem = (index) => {
  const arrayTemporario = [...lista] ; 
  arrayTemporario.splice(index,1)
  setLista(arrayTemporario); 
}



// ------------------------ LOCAL STORAGE ==========--------------------------------------------------



 return (
<MainBase >
 <BlocoTarefas   >
   <Tittle>CRUD</Tittle>
   <DigitarTarefa  placeholder=' Digite uma tarefa...' onChange={textInput} value={inputValue} />

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