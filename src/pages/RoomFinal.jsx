import React from 'react'
import {db} from '../firebase'
import RoomDisplay from '../components/RoomDisplay'
 

export default function  RoomFinal(){
    const data= db.collection('productos');
    const [habitaciones, setHabitaciones] = React.useState([])
    
    React.useEffect(() => {
        const obtenerDatos = async () => {
              try {
                const snapshot = await data.get();
                const arrayData=snapshot.docs.map((doc) => (
                    {
                    ...doc.data()
                }))
                setHabitaciones(arrayData)
             
            } catch (error) {
              console.log(error)
            }
          }
          console.log("ESTE ES EL MENU ")
          obtenerDatos()         
    }, [  ])

    return (
        <section className="container " >
            <div className="row my-5 ">
                {habitaciones.map(habitacion => {
                    return <RoomDisplay
                    key={habitacion.id}
                    habitacion={habitacion}/>;               
            })}
            </div>
        </section>
    )
}

 
