import React from 'react'
import '../../src/App.css'
import './stock.js'

const Card = () => {
  return (
    <>
        <div className="card text-center bg-dark" style="width: 18rem;">
            <img src="../assets/img/top.png" className="card-img-top" alt="" />
            <div className="card-body text-light">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#!" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    
    </>
  );
}

export default Card;