import "./card.css";



const Card = () => {
  return (
 <div className="card">
  <h2>Histórico de Operações</h2>
  <ul className="card-scroll">
    <li>1 + 1 = 2</li>
    <li>2 + 3 + 1 = 6</li>
    <li>2 + 3 + 1 = 6</li>
 
  </ul>

 </div>
    
  );
};

export default Card;