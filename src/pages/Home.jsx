import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import rym from '../images/rym-bg.jpg'
import StyledHero from '../components/StyledHero';           

//import FeaturedRooms from '../components/FeaturedRooms';
//<FeaturedRooms/>
export default function Home() {
    return (
        <>
 
            <StyledHero img={rym}>
       <Banner title="Hostería Ríos Y Montañas">
       <p className="mt-4 mb-4">Suites Familiares a partir  de $100</p>
       <Link to="/rooms" className="btn btn-primary"> Nuestras habitaciones</Link>
       </Banner>
       </StyledHero>
            <Services/> 
        </>

    )
}
