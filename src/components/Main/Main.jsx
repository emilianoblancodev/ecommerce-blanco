import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Carrousel from '../Carrousel/Carrousel.jsx'
import Tarjeta from '../Tarjeta/Tarjeta.jsx'
import './Main.css'

const Main = () => {
  return (
    <>
        <Container>
            <Row>
                    <Carrousel />
                    <Tarjeta />
            </Row>
        </Container>
    
    </>
    
  )
}

export default Main