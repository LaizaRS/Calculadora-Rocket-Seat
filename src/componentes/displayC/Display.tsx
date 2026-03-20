import "./display.css";

type DisplayProps = {
  operacao?: string
  resultado?: string
}


const Display = ({operacao, resultado}: DisplayProps) => {

 return (
 <div className="display">
  <div> 
    <p className="text-align muted">{operacao}</p>
  </div>

  <div className="posicao"> 
    <p>=</p>
    <h2 className="heading">{resultado}</h2>
  </div>
 </div>
    
  );
};
      



export default Display;