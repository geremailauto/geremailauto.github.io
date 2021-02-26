import React, { useState } from 'react'
import './App.css';

function App() {
  const [mesa, setMesa] = useState('')
  const [autsec, setAuts] = useState('')
  const [aut, setAut] = useState('')
  const [secmesa, setSec] = useState('')
  const [moreMesa, setMore] = useState(false)

  return (
    <div className="App">
      <div className="input-box">
        <p>Nome da Mesa:</p>
        <input placeholder="Nome da mesa" value={mesa} onChange={(e) => setMesa(e.target.value)} />
        <p>Autores:</p>
        <input placeholder="Autores" value={aut} onChange={(e) => setAut(e.target.value)} />
        {moreMesa ? (
          <div className="input-box">
            <button style={{"color":"#FFF", "background":"tomato"}} onClick={()=>setMore(false)}>Remover Mesa</button>
            <p>Segunda Mesa:</p>
            <input placeholder="Mesa" value={secmesa} onChange={(e) => setSec(e.target.value)} />
            <p>Autores Segunda Mesa:</p>
            <input   placeholder="Autores Segunda Mesa" value={autsec} onChange={(e) => setAuts(e.target.value)} />
          </div>
        ) : (
            <div>
               <button style={{"color":"#FFF", "background":"#009900"}} onClick={()=>setMore(true)}>Adicionar Mesa</button>
            </div>
          )}
      </div>
      <div className="text-box">
        <p>Prezado(a),<br /> Indentificamos que você foi proponente de atividade(s), no Congresso UFBA 2020, contudo houveram algumas pendências que impossibilitaram a submissão. No momento da submissão do formulário não houve o preenchimento completo dos dados, logo, com o envio dos mesmos poderemos liberar a certificação. Solicitamos os seguintes dados:<br/>
        CPF e e-mail dos autores :
    <b>{aut}</b> da mesa : <b>{mesa}</b><br/>  </p>
      {moreMesa ? <p>Também os autores <b>{autsec}</b>, da mesa <b>{secmesa}</b></p> : <p></p>}
      </div>



    </div>
  );
}

export default App;
