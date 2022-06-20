import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  
MainBase, Tittle, Delete } from '../Components/divBase';
import { useState, useEffect } from 'react';


export default (SaveTema, StateInicial)=> {

  const [lista, setLista] =  useState([])
  const [inputValue, setInputValue] = useState('')
  const [storage, setStorage]

  useEffect(()=>{
   localStorage.setItem(SaveTema, JSON.stringify(lista))
  },[ SaveTema, lista])

  const exibirTarefa = () => {
    setLista([...lista, inputValue]);
    setInputValue(''); 
    localStorage.setItem('Listando', lista);  
  };


 const textInput =  (e) => {
  setInputValue(e.target.value); 
}; 



const DeletarItem = (index) => {
  const arrayTemporario = [...lista] ; 
  arrayTemporario.splice(index,1)
  setLista(arrayTemporario); 
  localStorage.removeItem('Listando'); 
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