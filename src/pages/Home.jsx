import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';

//import FeaturedRooms from '../components/FeaturedRooms';
//<FeaturedRooms/>
export default function Home() {
    return (
        <>
            <Hero hero="defaultHero"></Hero>    
            <Banner>
                <h1 className="mt-4 p-1 ">Hostería</h1>
                <h1> Ríos Y Montañas</h1>
                <p className="mt-4 mb-4">Suites Familiares a partir  de $100</p>
                <Link to="/rooms" className="btn btn-primary">
                    Nuestras habitaciones
                </Link>
            </Banner>
            <Services/> 
        </>

    )
}
