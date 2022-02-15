import React from 'react'
import Card from '../components/Card'
import stock from './stock.js'

const Cards = () => {
    
  return (
    <>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-md-4">
                    <Card/>
                </div>
                
            </div>
        </div>
    
    </>
  );
}

export default Cards