import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  
MainBase, Tittle, Delete } from '../Components/divBase';
import { useState, useEffect } from 'react';


export default ()=> {

  useEffect(()=>{
  


    
  },[])



  const [lista, setLista] = useState([])
  const [inputValue, setInputValue] = useState('')


  
  const exibirTarefa = () => {
    setLista([...lista, inputValue]);
    setInputValue(""); 
    armazenando(); 
 }



const DeletarItem = (index) => {
  const arrayTemporario = [...lista] ; 
  arrayTemporario.splice(index, 1)
  setLista(arrayTemporario); 
 armazenando();
}



// ------------------------ LOCAL STORAGE ==========--------------------------------------------------


const armazenando = () =>{
  const listaTarefas  = JSON.stringify(lista); 
   localStorage.setItem('lista-tarefas', listaTarefas); 
}

 
const tarefasSalvas = () =>{
 localStorage.getItem('lista-tarefas'); 
 console.log('lista-tarefas');
}
tarefasSalvas(); 



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