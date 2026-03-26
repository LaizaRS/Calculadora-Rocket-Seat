import Texto from "../texto/Texto";
import "./botao.css"
import type { ReactNode } from "react";

type BotaoProps = {
  onClick?:() => void
  children: ReactNode
  className?: string
}

const Botao = ({children, className, onClick}: BotaoProps) => {
  return (
    <Texto>
      <button onClick={onClick} className={className}>
      {children}
      </button>
    </Texto>
  );
};

export default Botao;