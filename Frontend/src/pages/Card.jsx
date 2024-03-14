import React from "react";
import './Card.css';

function Card(props){
  var x = props.name;
    return (
        <div className="outer">
      <div className='box'>
        <div className="image">
          <img className="dp" src={props.image} alt="" />
          </div>
          <div className="details">
          <h3>{props.name}</h3>
          <p>{props.phone}</p>
          <p>{props.email}</p>
          </div>
          <div className="links">
         { ( x ==='Mohd Nasar Siddiqui') && <p>Senior Developer Exp: 30Years+</p>}
          </div>
      </div> 
      </div>
    );
  }

  export default Card;