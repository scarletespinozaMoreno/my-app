 
import { ConsoleWriter } from 'istanbul-lib-report'
import React from 'react'
import {db} from '../firebase'
import RoomFinal from '../pages/RoomFinal'
import RoomDisplay from './RoomDisplay'
 
 

const RoomsFilter = () => {
    
    const [data, setData] = React.useState("Habitaciones")
 
    return (
        <>
        <div className="container mt-4">
            {
        <div className="row">
            <div className="col-md-3 col-12">
                <div className="form-group">

                <form >
                    <label htmlFor="type">Tipo de Habitación</label> 
                    <select name="type" value={data} className="form-control "  onChange={(e) =>{
                               const selected = e.target.value;
                               setData(selected);
                        }}>
                        <option value="Habitaciones">Habitaciones</option>
                        <option value="Habitacion Simple">Habitacion Simple</option>
                        <option value="Habitacion Doble">Habitacion Doble</option>
                        <option value="Habitacion Triple">Habitacion Triple</option>
                        <option value="Suite">Suite</option>
                    </select>
                </form>
                </div>
            </div>
        </div>
        }
        <RoomFinal room={data}/>  
    </div>
       </>
    )
}

export default RoomsFilter

 
  