import "./texto.css";
import type { ReactNode } from "react";

type Textprops = {
  children: ReactNode
  className?: string

}

const Texto = ({children, className}: Textprops) => {
  return (
    <span className={className}>
      {children}
    </span>
      
  );
};

export default Texto;