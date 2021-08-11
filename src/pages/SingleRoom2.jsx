import React from 'react'
import {Link} from 'react-router-dom';
import {RoomContext} from '../context/RoomProvider'
import StyledHero from '../components/StyledHero';
 
import Banner from '../components/Banner';


export const habitacionContext=React.createContext()

const SingleRoom2=(habitacion )=>{
    const{room}=React.useContext(RoomContext)
  //  console.log("MI VARIABLE GLOBAL FINAL ",room.categoria,room.nombre )
  //console.log("Tamaño de string ",room.categoria.length)
//console.log("MI VARIABLE GLOBAL FINAL ",room )
    return(
        <>
        
       <StyledHero img={room.imagen }>
       
       <Banner title={`${room.categoria}`}>
               <Link to="/rooms" className="btn btn-primary">Volver a habitaciones</Link>
       </Banner>
       </StyledHero>
      
       <div className="container roomerror">
       <section className="single-room container">
  
          <div className="row">
               
                   <div className="col-md-5 col-12 mx-auto" >
                       <div className="card border-0 shadow-lg">
                          <img   src={room.imagen} alt={room.nombreame} className="img-fluid" />
                       </div>
                   </div>
             
          </div>
          
          <div className="single-room-info">
              <article className="desc">
                 <h3>Detalles :</h3>
                 <p>{room.descripcion}</p>
              </article>
              <article className="info">
                 <h3>Info</h3>
                 <h6>Precio : ${room.precio}</h6>
                 <h6>
                     Capacidad : {" 1 "}
                         
                 </h6>
                 <h6>Mascotas permitidas : No se admite</h6>
                 <h6> Desayuno gratis incluido</h6>
              </article>
          </div>
       </section>
       <section className="room-extras">
           <h3>Extras</h3>
           <ul className="extras">
             
                <li> {room.descripcion} </li>
               
           </ul>
           <div className="p-4 clearfix">
               <div className="row">
                  <div className="col-md-3 col-12 ml-auto">
                     <Link to={`/booknow/${room.categoria}`} className="btn btn-outline-primary btn-block btn-lg float-right ">Registrar</Link>
                  </div>
               </div>
           </div>
       </section>

            
        </div>
         
         
         
        </>
    )  


}
export default   SingleRoom2    