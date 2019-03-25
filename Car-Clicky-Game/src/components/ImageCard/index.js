import React from "react";
import "./style.css";


const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <img className="img-thumbnail img-responsive" src={require('../../images/'+props.image)} alt={props.name} onClick={() => props.clickImage(props.id)} />
          
    </div>
    <p>Manufacturer: {props.name}</p>
  </div>
);

export default ImageCard;
