import "./display.css";
import type { ReactNode } from "react";

type DisplayProps = {
  operacao?: ReactNode
  resultado?: string
}


const Display = ({operacao, resultado}: DisplayProps) => {

 return (
 <div className="display">
  <div> 
    <p className="text-align muted">{resultado && operacao}</p>
  </div>

  <div className="posicao"> 
    <p>=</p>
    <h2 className="heading">{resultado || operacao}</h2>
  </div>
 </div>
    
  );
};
      



export default Display;