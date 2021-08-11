import React from 'react'
 
import {auth,db} from '../firebase'
import ReservaDisplay from './ReservaDisplay';
 




const Reserva = (props) => {
    var id = auth.currentUser.email;//mail para el id
    const [habitaciones, setHabitaciones] = React.useState([])
    //console.log("MI USUARIO ACTUAL",id)    
    //llamar datos
    React.useEffect(() => {
        const obtenerDatos = async () => {
              try {
                const snapshot = await db.collection('usuarios').doc(id).collection("reservas").where("existencia", "==", true).get()//datos con existncia igual true
               // console.log("data",snapshot)
                const arrayData=snapshot.docs.map((doc) => (
                    {
                    ...doc.data()
                }))
              setHabitaciones(arrayData)
            } catch (error) {
              console.log(error)
            }
          }
          obtenerDatos()  
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
    , [  ])
    //console.log("ESTE ES EL MENU ",habitaciones)
    //recorrer
    //identificar y comparar
    //mostrar
    return (
        <section  >
             
                {habitaciones.map(habitacion => {
                    return <ReservaDisplay
                    key={habitacion.id}
                    habitacion={habitacion}/>;               
            })}
         
        </section>

    )
}
export default  Reserva