import Botao from "../botao/Botao";
import Display from "../displayC/Display";
import "./calculadora.css"

const botaoEscuro = [ 9, 8, 7, 6, 5, 4, 3, 2, 1]
const operacoes = ["÷", "x", "-", "+", "="]

const Calculadora = () => {
  return (
 <div className="calculadora">
  <Display operacao="1 + 1" resultado="2"/>
   <div className="botoes">
    <div className="numeros">
      <div className="ce-c">
        <Botao className="botao diferente-width">CE</Botao>
        <Botao className="botao">C</Botao>
      </div>
      <div className="numeros">
        {botaoEscuro.map((numero) => (<Botao className="botao" key={numero}>{numero}</Botao>))}
      </div>
      <div className="ce-c">
        <Botao className="botao diferente-width">0</Botao>
        <Botao className="botao">,</Botao>
      </div>
    </div>
    <div className="botao-roxo">
      {operacoes.map((operacao) => (<Botao className="botao roxo" key={operacao}>{operacao}</Botao>))}
    </div>
   </div>
 </div>
    
  );
};

export default Calculadora;