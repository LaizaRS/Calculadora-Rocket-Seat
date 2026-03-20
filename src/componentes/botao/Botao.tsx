import type { ReactNode } from "react";
import Texto from "../texto/Texto";
import "./botao.css"
type BotaoProps = {
  onClick?: string
  children: ReactNode
  className?: string
}

const Botao = ({children, className}: BotaoProps) => {
  return (
<Texto><button className={className}>
  {children}
  </button></Texto>
    
  );
};

export default Botao;