import React from 'react'
import { Nav } from 'react-bootstrap'
import Navigation from '../components/Navigation/Navigation'

const Contacto = () => {
  return (
    <>
      <Navigation />
      
      <div className="container mb-3  mt-3 w-50">
        <label for="exampleFormControlInput1" class="form-label">Nombre y Apellido</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="nombre@dominio.com" />
      </div>
      <div className="container mb-3  mt-3 w-50">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre@dominio.com" />
      </div>
      <div className="container mb-3 w-50">
        <label for="exampleFormControlTextarea1" className="form-label">Ingrese su consulta</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button className="btn btn-primary mt-3">Enviar</button>
      </div>
    </>
  )
}

export default Contacto