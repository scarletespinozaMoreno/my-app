import React, { useEffect, useState } from "react";
import {getActividades} from '../Data/ActividadData';
const Actividades = () => {

    const [actividades, setActividades] = useState([]);
    const [Imagen, setImagen] = useState('');
    const [Descripcion, setDescripcion] = useState('');
    const [fechaInicio, setfechaInicio] = useState('');
    const [Duracion, setDuracion] = useState('');
    const [Hora, setHora] = useState('');
    const [Capacidad, setCapacidad] = useState('');
    const [Titulo, setTitulo] = useState('');

    const getlist = async () => { 
        try {
            const list = await getActividades();
            setActividades(list);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getlist();
    }, []);

    const Card = (props) => (
        <div className="card h-100">
            <img src={props.data.Imagen} className="card-img-top" alt="..."></img>
            <h2 className="card-header">{props.data.Titulo}</h2>
            <div className="card-body">
                <p className="card-text">Descripción: {props.data.Descripcion}</p>
                <p className="card-text">Duración: {props.data.Duracion}</p>
                <p className="card-text">Hora: {props.data.Hora}</p>
                <p className="card-text">Capacidad permitida: solo {props.data.Capacidad}</p>
                <p className="card-text">Forma de registro: Reservación al 0959858891</p>
            </div>
        </div >
    )

 return(
        
            <div className=" mt-5 mb-5 p-5">
                <h1 className= "mt-5">Actividades</h1>
                <div className="row row-cols-1 row-cols-md-3 mt-5">
                        <div className="col mb-4">  
                            <> 
                            {actividades.map((info, i) => (
                                 <Card data={info} key={i}></Card>
                             ) )}
                            
                            </>
                              
                                
                        </div>
                </div>
            </div>
           
        
    )
    
}


export default Actividades
