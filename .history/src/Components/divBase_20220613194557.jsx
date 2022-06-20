import styled from "styled-components";


export const MainBase = styled.div`
width: 100vw;
height: 100vh; 
border: solid 5 black;
background-image: url(https://cdn.wallpapersafari.com/38/65/Fcx7LA.jpg);
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`;

export const BlocoTarefas = styled.div`

width: 50vw;
min-height: 500px;
background-color: #191919;
opacity: 0.8;
border-radius: 10px;
`;

export const Tittle = styled.h1`

color: #ffffff;
text-align: center;
margin-top: 20px;
`;

export const DigitarTarefa = styled.input`
width:350px;
height: 30px;
border-radius: 5px;
margin-left: 70px;
margin-top: 20px;
`;

export const BotaoADD = styled.button`
height: 30px;
width: 160px;
border-radius: 5px;
font-size: 14px;
border-style: none;
margin-left: 35px;
cursor: pointer;
cursor: zoom-in;

`;

export const Tarefa  = styled.li`
 width: 550px;
 background-color: white;
 margin-left: 70px;
 margin-top: 10px;
 border-radius: 10px;
 padding: 5px;
 list-style: none;
 overflow-wrap:break-word;
`; 


export const Delete = styled.button`
 background-color: red;
 border-radius: 3px;
 border-style: none;
 color:white;
 width: 80px;
 height: 20px;
 margin-left: 450px;
`;