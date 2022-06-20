import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  
MainBase, Tittle, Delete } from '../Components/divBase';
import { useState, useEffect } from 'react';
import { ReactDOM } from 'react';


export default ()=> {


  const [lista, setLista] =  useState(['digitando tarefa'])
  const [inputValue, setInputValue] = useState('')

  const exibirTarefa = (e) => {
    if(e.key)
    setLista([...lista, inputValue]);
    setInputValue(''); 
    armazenando(); 
  };


 const textInput =  (e) => {
  setInputValue(e.target.value); 
}; 



const DeletarItem = (index) => {
  const arrayTemporario = [...lista] ; 
  arrayTemporario.splice(index,1)
  setLista(arrayTemporario); 
 armazenando();
}



// ------------------------ LOCAL STORAGE ==========--------------------------------------------------


const armazenando = (element) =>{
  
  for(let i = 0; i < lista.length; i++) {
     console.log(lista.toString()); 
  }
}

 

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