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
            <h5 className="card-header">{props.data.title}</h5>
            <div className="card-body">
                <h5 className="card-title">{props.data.Titulo}</h5>
                <p className="card-text">{props.data.Descripcion}</p>
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
