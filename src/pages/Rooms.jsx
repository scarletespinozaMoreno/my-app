import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';
const Rooms = () => {
    return (
    <div>
        <Hero hero="roomsHero">
        </Hero>
        <Banner title="Habitaciones disponibles" subtitle="Bien acondicionadas">
                <Link to="/" className="btn btn-primary">
                    Volver al Inicio
                </Link>
        </Banner>
         
        <RoomsContainer/>
    </div>
    )
}

export default Rooms