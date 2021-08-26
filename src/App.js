import React, { useState , useEffect} from 'react';
import ReactDOM from 'react-dom';

export default function App(){
    
    function Home(){
        return <h1>Titulo React</h1>
      }
    
    function Texto(props){
        return <p>{props.texto}</p>
      }
    
    function Paragrafos(){
        return(
          <div>
            <Texto texto='Clica para aumentar'/>
          </div>
        );
      }
    function Botao(props){
        const [botao, setBotao] = useState(0);
      
        useEffect(() => {
          document.title = botao;
        },[botao])
        
        return(
          <div>
            <p>linha 1 {botao}</p>
            <button onClick={() => setBotao(botao+1)}>{props.nome}</button>
          </div>
        );
    }
    return(
        <div>
        <Home />
        <Texto/>
        <Paragrafos/>
        <Botao nome='aumentar'/>
        </div>
    )
}


