import React, {useState} from 'react'
import '../../App.css'
import '../Tarjeta/Tarjeta.css'
import {Button, Card, Badge, InputGroup, FormControl} from 'react-bootstrap'
import top from '../../assets/img/top.png'
import mochila from '../../assets/img/mochila.png'
import remera_adidas from '../../assets/img/remera_adidas.png'
import gorro from '../../assets/img/gorro.png'
import pantalon from '../../assets/img/pantalon.png'
import short from '../../assets/img/short.png'
import campera from '../../assets/img/campera.png'
import zapatilla_nike from '../../assets/img/zapatilla_nike.png'
import nike_airmax from '../../assets/img/nike_airmax.png'
import remera from '../../assets/img/remera.png'
import zapatilla_puma from '../../assets/img/zapatilla_puma.png'
import calzas from '../../assets/img/calzas.png'
import Modal from '../Modal/Modal.jsx'
import Increase from '../Increase/Increase.jsx'

const Tarjeta = () => {
  
  const products = [{
    id: 0,
    titulo: "Top Nike",
    src: top,
    descripcion: "Top de color rosa intenso de licra especial para hacer running",
    usuario: "mujer",
    precio: 3500
},
{
    id: 1,
    titulo: "Mochila Adidas",
    src: mochila,
    descripcion: "Mochila Adidas de color gris plomo, impermeable con bolsillo de seguridad antirrobo ",
    usuario: "hombre",
    precio: 6000
},
{
    id: 2,
    titulo: "Remera Adidas",
    src: remera_adidas,
    descripcion: "Remera de hombre Adidas, de lycra transpirable especial para running",
    usuario: "hombre",
    precio: 3100
},
{
    id: 3,
    titulo: "Gorro Nike",
    src: gorro,
    descripcion: "La gorra Nike Tech Swoosh para mujer cuenta con 100% poliéster Dri-FIT ripstop construcción. Esta gorra ligera y transpirable viene con un cierre trasero sin enganches que garantiza el ajuste perfecto y la comodidad total.",
    usuario: "mujer",
    precio: 2500
},
{
    id: 4,
    titulo: "Pantalón Adidas",
    src: pantalon,
    descripcion: "Pantalón de hombre Adidas de color azul chupinado con cierre bajo",
    usuario: "hombre",
    precio: 5200
},
{
    id: 5,
    titulo: "Short Nike",
    src: short,
    descripcion: "Short de mujer de color rosa, transpirable",
    usuario: "mujer",
    precio: 3900
},
{
    id: 6,
    titulo: "Campera Nike",
    src: campera,
    descripcion: "Campera de hombre Nike con friza interior, de color negro con capucha y cierre ultra-resistente.",
    usuario: "hombre",
    precio: 8100
},
{
    id: 7,
    titulo: "Zapatilla Nike",
    src: zapatilla_nike,
    descripcion: "Zapatilla de hombre modelo Renew 100% sintetico, de color blanco con suela ultra blanda especial para running. La malla de la parte superior es transpirable lo que nos brinda mayor confort.",
    usuario: "hombre",
    precio: 19500
},
{
    id: 8,
    titulo: "Zapatilla Nike",
    src: nike_airmax,
    descripcion: "Zapatilla Nike modelo AIR-MAX de hombre, de color negro y suela especial de color blanco con capsula de aire para un mayor confort.",
    usuario: "hombre",
    precio: 23800
    
},
{
    id: 9,
    titulo: "Remera DPS",
    src: remera,
    descripcion: "Remera Running de hombre de color azul transpirable",
    usuario: "hombre",
    precio: 3500
},
{
    id: 10,
    titulo: "Zapatilla Puma",
    src: zapatilla_puma,
    descripcion: "Zapatilla Puma de color gris de hombre con suela de goma estilo clasico y empeine de cuero textil especial urban",
    usuario: "mujer",
    precio: 16500
},
{
    id: 11,
    titulo: "Calzas Nike",
    src: calzas,
    descripcion: "Calzas Nike largas de lycra con inscripcion de la marca en la pierna",
    usuario: "mujer",
    precio: 11500
},    
]
// incrementador

    const [increase, setIncrease] = useState(1)
    const inc = () => {
        setIncrease(increase + 1);
    }

//Decrementador

    const [decrease, setDecrease] = useState(0)
    const dec = () => {
        if(decrease>=1){
            setDecrease(decrease - 1);
        }
            
    }



  return (
    <>
        {products.map((product)=>{
            return(
                
                <Card style={{ width: '18rem', margin:'20px', text: 'center' }}>
                    <Card.Img variant="top" src={product.src} />
                    <Card.Body>
                        <Card.Title>{product.titulo}</Card.Title>
                        <Card.Text>
                            {product.descripcion}
                        </Card.Text>
                        <h2><Badge bg="danger">${product.precio}</Badge></h2>
                        <InputGroup className="mb-3">
                            
                            <FormControl className="qty" type="number" aria-label="Example text with two button addons" placeholder="1" min="1" />
                            
                        </InputGroup>
                        <div className="d-grid gap-2">
                            <Button size="lg" variant="warning">Comprar</Button>
                        </div>
                        
                    </Card.Body>
                </Card>

                
            )
        
        })}
        
    
    </>
  )
}

export default Tarjeta;