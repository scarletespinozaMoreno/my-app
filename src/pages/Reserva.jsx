import React from 'react'
import {auth,db} from '../firebase'
import ReservaDisplay from './ReservaDisplay';
import Reserved from './Reserved';

const Reserva = (props) => {
    var id = auth.currentUser.email;//mail para el id
    const [habitaciones, setHabitaciones] = React.useState([])
    const [habitaciones2, setHabitaciones2] = React.useState([])
    React.useEffect(() => {
        const obtenerDatos = async () => {
              try {
                const snapshot = await db.collection('usuarios').doc(id).collection("reservas").where("existencia", "==", true).get()
                const snapshot2 = await db.collection('usuarios').doc(id).collection("reservas").where("existencia", "==", false).get()//datos con existncia igual true
               // console.log("data",snapshot)
                const arrayData=snapshot.docs.map((doc) => (
                    {
                    ...doc.data()
                }))
                const arrayData2=snapshot2.docs.map((doc) => (
                  {
                  ...doc.data()
              }))
              setHabitaciones(arrayData)
              setHabitaciones2(arrayData2)
            } catch (error) {
              console.log(error)
            }
          }
          obtenerDatos()  
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
    , [  ])
    //recorrer
    //identificar y comparar
    //mostrar
    return (
      <>
        <div  className="container">
 
                {habitaciones.map((habitacion,index)=> {
                    return <ReservaDisplay
                    key={index}
                    habitacion={habitacion}/>;               
            })}
         {habitaciones2.map((habitacion2,index)=> {
                    return <Reserved
                    key={index}
                    habitacion2={habitacion2}/>;               
            })}
        </div>
      </>
    )
}
export default  Reserva