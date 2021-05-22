import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="Suites Familiares" subtitle="a partir  de $200">
                <Link to="/rooms" className="btn btn-primary">
                      Nuestras habitaciones
                </Link>
        </Banner>
        <Services/> 
        <FeaturedRooms/>
       
        </>

    )
}
