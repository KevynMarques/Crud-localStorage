import React from 'react'
import { BlocoTarefas, DigitarTarefa,BotaoADD, Tarefa,  
MainBase, Tittle, Delete } from '../Components/divBase';
import { useState, useEffect } from 'react';


export default ()=> {

  useEffect(() => {
    async function carregaRepositorios () {
      const resposta = await fetch('https://api.github.com/users/julio-cesar96/repos');
      const repositorios = await resposta.json();
 return repositorios;
    }
    carregaRepositorios();
  }, []);

  const [lista, setLista] = useState([])
  const [inputValue, setInputValue] = useState('')


const textInput = (e) => {
 return setInputValue(e.target.value); 
}; 


const exibirTarefa = () => {
  return ( 
   setLista([...lista, inputValue])  
   );
}

const DeletarItem = (index) => {
  const arrayTemporario = [...lista] ; 
  arrayTemporario.splice(index, 1)
  setLista(arrayTemporario); 
}


 return (
<MainBase >
 <BlocoTarefas   >
   <Tittle>CRUD</Tittle>
   <DigitarTarefa  onChange={textInput} />

   <BotaoADD type='submit' onClick={exibirTarefa}  disabled={inputValue ==='' ? true : false} >
      Adicionar tarefa 
   </BotaoADD>

<ul>
  {lista.map((item, index) => 
  <Tarefa>
    {item}
    <Delete onClick={DeletarItem}>
      Deletar
    </Delete>
  </Tarefa>)}
</ul>

 </BlocoTarefas>
</MainBase>


 ); 
}