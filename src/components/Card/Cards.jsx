import React from 'react'
import Card from './Card'
import stock from '../stock.js'
import './Card.css'

const Cards = () => {
    
  return (
    <>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-md-4" key={stock.id}>
                    <Card />
                </div>
                
            </div>
        </div>
    
    </>
  );
}

export default Cards