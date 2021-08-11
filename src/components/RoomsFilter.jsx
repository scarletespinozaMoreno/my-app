 
import React from 'react'
import RoomFinal from '../pages/RoomFinal'
 
 

const RoomsFilter = () => {
    const [data, setData] = React.useState("Habitaciones")
    const [values,setValues] = React.useState(0)
    const slider = React.createRef()
    return (
        <>
        <div className="container mt-4">
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
                    <div className="col">
                            <label htmlFor="price">Precio de habitación: {values} </label>
                            <input
                            className="col  col-12"
                            type="range"
                            ref={slider}
                            min ={0} max={500}
                            defaultValue={500}
                            onChange={(e) =>{
                                const selected = e.target.value;
                                setValues(selected)
                                setData(selected);
                            }}/>
                    </div>
                    </div>
                </div>
            </div>
            <RoomFinal room={data}/>  
        </div>
       </>
    )
}

export default RoomsFilter

 
  