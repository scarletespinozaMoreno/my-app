import React from 'react'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'
import Title from '../components/Title';
const Promociones = () => {
    return (
        <div>
                <Hero hero="promocionesHero"></Hero>
                <Banner title="Promociones" subtitle="Por formar parte de nuestra página disfruta estas promociones">
                        <Link to="/" className="btn btn-warning">
                            Volver al Inicio
                        </Link>
                </Banner>
                <div className=" mb-5 p-5">
                    <Title title="Promociones Disponibles" />

                </div>
               
        </div>
    )
}

export default Promociones
