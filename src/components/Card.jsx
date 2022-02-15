import React from 'react'
import '../../src/App.css'
import './stock.js'

const Card = (props) => {
    
  return (
    <>
        <div className="card text-center bg-dark" style="width: 18rem;">
            <img src={props.src} className="card-img-top" alt="" />
            <div className="card-body text-light">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                <a href="#!" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    
    </>
  );
}

export default Card;