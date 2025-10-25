function Card({ image,servicename }) {
  return (
    <div className="card fallanimation">
      <img className="serviceimage" src={image}/>
      <p className="servicename">{servicename}</p> 
    </div>
  );
}

export default Card;
