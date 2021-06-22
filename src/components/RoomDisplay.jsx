import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import {RoomContext} from '../context/RoomProvider'
export const habitacionContext=React.createContext()

 
const RoomDisplay = ({habitacion}) => {
    const{room}=React.useContext(RoomContext)
    const [rooms,getRoom]=React.useState({
        categoria:'',
        descripcion:'',
        existencia:'',
        imagen:'',
        nombre:'',
        precio:'',
        
    })
    const {  categoria,descripcion,existencia,imagen,nombre,precio} = habitacion 
 //   console.log("habitacion de display room",habitacion)
//to={`/rooms/${categoria}`} 
const cargarDatos = () => {
        room.categoria=categoria
        room.descripcion=descripcion
        room.existencia=existencia
        room.imagen=imagen
        room.nombre=nombre
        room.precio=precio
    console.log("VARIABLE GLOBALES",room)
    }
    return( 
        
        <div className="col-md-4  col-12 mx-auto p-2">
            <div className="card shadow-lg border-0 room   "  >
                 
                    <img src={imagen} alt="imagen habitacion"  alt="single room" 
                    className="img-fluid" 
                    style={{ maxWidth: '425px',
                            height: '250px'
                 }}/>
                    
                    <div className="price-top">
                        <h5>$ {precio}</h5>
                        <p>por noche</p>
                    </div>

                    <Link  to={`/rooms/${nombre}`} className="btn-warning room-link text-center"  onClick={() =>{
                                 
                                    cargarDatos();
                                   
                                    
                                }}>Características</Link>  
                    <p className="room-info">{categoria}</p>
             
            </div>   
        </div>
        );


    }


export default withRouter(RoomDisplay);
 