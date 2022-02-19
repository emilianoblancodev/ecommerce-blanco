import React from 'react'
import '../../App.css'
import '../Tarjeta/Tarjeta.css'
import {Button, Card} from 'react-bootstrap'

const Tarjeta = () => {
  
  const products = [{
    id: 0,
    titulo: "Top Nike",
    src: "../../src/assets/img/top.png",
    descripcion: "Top de color rosa intenso de licra especial para hacer running",
    usuario: "mujer"
},
{
    id: 1,
    titulo: "Mochila Adidas",
    src: "../src/assets/img/mochila.png",
    descripcion: "Mochila Adidas de color gris plomo, impermeable con bolsillo de seguridad antirrobo ",
    usuario: "hombre"
},
{
    id: 2,
    titulo: "Remera Adidas",
    src: "../src/assets/img/remera_adidas.png",
    descripcion: "Remera de hombre Adidas, de lycra transpirable especial para running",
    usuario: "hombre"
},
{
    id: 3,
    titulo: "Gorro Nike",
    src: "../src/assets/img/gorro.png",
    descripcion: "Gorro Nike de color blanco, transpirable",
    usuario: "mujer"
},
{
    id: 4,
    titulo: "Pantalón Adidas",
    src: "../src/assets/img/pantalon.png",
    descripcion: "Pantalón de hombre Adidas de color azul chupinado con cierre bajo",
    usuario: "hombre"
},
{
    id: 5,
    titulo: "Short Nike",
    src: "../src/assets/img/short.png",
    descripcion: "Short de mujer de color rosa, transpirable",
    usuario: "mujer"
},
{
    id: 6,
    titulo: "Campera Nike",
    src: "../src/assets/img/campera.png",
    descripcion: "Campera de hombre Nike, de color negro con capucha y cierre ultra-resistente",
    usuario: "hombre"
},
{
    id: 7,
    titulo: "Zapatilla Nike",
    src: "../src/assets/img/zapatilla_nike.png",
    descripcion: "Zapatilla de hombre modelo Renew, de color blanco con suela ultra blanda especial para running",
    usuario: "hombre"
},
{
    id: 8,
    titulo: "Zapatilla Nike",
    src: "../src/assets/img/nike_airmax.png",
    descripcion: "Zapatilla Nike modelo AIR-MAX de hombre, de color negro y suela especial con capsula de aire",
    usuario: "hombre"
    
},
{
    id: 9,
    titulo: "Remera DPS",
    src: "../src/assets/img/remera.png",
    descripcion: "Remera Running de hombre de color azul transpirable",
    usuario: "hombre"
},
{
    id: 10,
    titulo: "Zapatilla Puma",
    src: "../src/assets/img/zapatilla_puma.png",
    descripcion: "Zapatilla Puma de color gris de hombre con suela estilo clasico especial urban ",
    usuario: "mujer"
},
{
    id: 11,
    titulo: "Calzas Nike",
    src: "../src/assets/img/calzas.png",
    descripcion: "Calzas Nike largas de lycra con inscripcion de la marca en la pierna",
    usuario: "mujer"
},    
]

  return (
    <>
        {products.map((product)=>{
            return(
                
                <Card style={{ width: '18rem', margin:'20px' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{product.titulo}</Card.Title>
                        <Card.Text>
                            {product.descripcion}
                        </Card.Text>
                        <Button variant="warning">Comprar</Button>
                    </Card.Body>
                </Card>

                //         <div className="card">
                //     <img src={product.src} className="card-img-top" alt="..." />
                //     <div className="card-body">
                //         <h5 className="card-title">{product.titulo}</h5>
                //         <p className="card-text">{product.descripcion}</p>
                //         <a href="#" className="btn btn-primary">Agregar al Carrito</a>
                //     </div>
                // </div>
                    
                

                
            )
        
        })}
        
    
    </>
  )
}

export default Tarjeta;