import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import {RoomContext} from '../context/RoomProvider'
export const habitacionContext=React.createContext()

 
const RoomDisplay = ({habitacion}) => {
    const{room,cambioRoom}=React.useContext(RoomContext)
    const {  categoria,descripcion,existencia,imagen,imagenes,nombre,precio} = habitacion 
    const cargarDatos = () => {
            room.categoria=categoria
            room.descripcion=descripcion
            room.existencia=existencia
            room.imagen=imagen
            room.imagenes=imagenes
            room.nombre=nombre
            room.precio=precio
            cambioRoom(room)
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


                    <Link  to={`/rooms/${nombre}`} className="btn-warning1 room-info   text-center"  onClick={() =>{
                                 
                                 cargarDatos();
                                
                                 
                             }}>{categoria}</Link> 
             
            </div>   
        </div>
        );


    }


export default withRouter(RoomDisplay);
 