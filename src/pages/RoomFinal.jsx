import React from 'react'
import {db} from '../firebase'
import RoomDisplay from '../components/RoomDisplay'
 

const RoomFinal = () => {
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
          obtenerDatos()         
    }, [  ])

    return (
        <section className="container " >
            <div className="row my-5 ">
                {habitaciones.map(habitacion => (
                   
                <RoomDisplay
                    key={habitacion.id}
                    habitacion={habitacion}
                    
                />
                
            ))}
            </div>
        </section>
    )
}

export default RoomFinal;
