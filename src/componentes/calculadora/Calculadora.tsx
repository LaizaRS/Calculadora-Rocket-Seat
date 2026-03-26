import { useState } from "react";
import Botao from "../botao/Botao";
import Display from "../displayC/Display";
import "./calculadora.css";

const botaoEscuro = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const operacoes = ["÷", "x", "-", "+", "="];

const Calculadora = () => {
  const [operation, setOperation] = useState("");
  const [resultado, setResultado] = useState("");

  function handleClickNumero(numero?: number) {
      if (resultado) {
      setOperation(String(numero))
      setResultado("")
      return
  }
    setOperation((prev) => prev + numero);
  }

  function handleClickNotNumero(operacao?: string) {
    if (operacao === "=") {
      const expressao = operation
        .replace(/x/g, "*")
        .replace(/÷/g, "/")
        .replace(/,/g, ".");

      const partes = expressao.split(/([+\-*/])/);

      const num1 = Number(partes[0]);
      const operador = partes[1];
      const num2 = Number(partes[2]);

      let resultadoCalculado = 0;

      switch (operador) {
        case "+":
          resultadoCalculado = num1 + num2;
          break;
        case "-":
          resultadoCalculado = num1 - num2;
          break;
        case "*":
          resultadoCalculado = num1 * num2;
          break;
        case "/":
          resultadoCalculado = num1 / num2;
          break;
        default:
          return;
      }

      const resultadoFinal = String(resultadoCalculado).replace(".", ",");

      setResultado(resultadoFinal);
      setOperation(resultadoFinal);
      return;
    }

    if (resultado) {
      if (operacao && ["+", "-", "x", "÷"].includes(operacao)) {
        setOperation(resultado + operacao)
      } else {
        setOperation(operacao || "")
      }

      setResultado("")
      return
    }

    if (operacao && ["+", "-", "x", "÷"].includes(operacao)) {
      if (operation === "") return

      const ultimoChar = operation.slice(-1)

      if (["+", "-", "x", "÷"].includes(ultimoChar)) {
        setOperation((prev) => prev.slice(0, -1) + operacao)
        return
      }
    }

    if (operacao === ",") {
      const partes = operation.split(/[+\-x÷]/);
      const ultimoNumero = partes[partes.length - 1];

      if (ultimoNumero.includes(",")) return;


      if (operation === "" || /[+\-x÷]$/.test(operation)) {
        setOperation((prev) => prev + "0,");
        return;
      }
    }

    setOperation((prev) => prev + operacao);
  }

  return (
    <div className="calculadora">
      <Display operacao={operation} resultado={resultado} />

      <div className="botoes">
        <div className="numeros">
          <div className="ce-c">
            <Botao
              className="botao diferente-width"
              onClick={() => setOperation((prev) => prev.slice(0, -1))}
            >
              CE
            </Botao>

            <Botao
              className="botao"
              onClick={() => {
                setOperation("");
                setResultado("");
              }}
            >
              C
            </Botao>
          </div>

          <div className="numeros">
            {botaoEscuro.map((numero) => (
              <Botao
                className="botao"
                key={numero}
                onClick={() => handleClickNumero(numero)}
              >
                {numero}
              </Botao>
            ))}
          </div>

          <div className="ce-c">
            <Botao
              className="botao diferente-width"
              onClick={() => handleClickNumero(0)}
            >
              0
            </Botao>

            <Botao
              className="botao"
              onClick={() => handleClickNotNumero(",")}
            >
              ,
            </Botao>
          </div>
        </div>

        <div className="botao-roxo">
          {operacoes.map((operacao) => (
            <Botao
              className="botao roxo"
              key={operacao}
              onClick={() => handleClickNotNumero(operacao)}
            >
              {operacao}
            </Botao>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculadora;