import React, { useEffect, useState } from "react";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'
import Title from '../components/Title';
import {getPromociones} from '../Data/PromocionesData';


const Promociones = () => {
    
    const [promociones, setPromociones] = useState([]);
    const getlist = async () => { 
        try {
            const list = await getPromociones();
            setPromociones(list);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getlist();
    }, []);
    const Card = (props) => (
        <div className="col mb-4"> 
            <div className="card text-center">
                <div id="cardPromocionHeader" className="card-header " width="100px"></div>
                <div className="card-body">
                    <h5 className="card-title">{props.data.Titulo}</h5>
                    <p className="card-text">{props.data.Descripcion}</p>
                    <a href="/" id="btnDetalle" className="btn ">Ver detalle</a>
                </div>
                <div id="cardPromocionFooter" className="card-footer ">Duracion: {props.data.Duracion}</div>
            </div>

        </div>
    )
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
                    <div className="row row-cols-1 row-cols-md-2 mt-5">
                            <> 
                            {promociones.map((info, i) => (
                                 <Card data={info} key={i}></Card>
                             ) )}
                            
                            </>
                    </div>
                </div>
        </div>
    )
}

export default Promociones
