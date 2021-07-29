import React from 'react'
 
import {auth,db, storage} from '../firebase'
 




const Reserva = (props) => {
    var id = auth.currentUser.email;
    console.log("MI USUARIO ACTUAL",id)    
    
    return (
        <div className="container col-md-10 col-6 mx-auto mt-5 p-5">
        <div className="row  mt-10">
            <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4  mt-10">
                <div>
                    <h1 className="display-4  mt-10">Reserva Actual</h1>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <img src="" className="img-fluid" alt="selected room" />
                    </div>
                    <div className="col-md-6 col-12 my-auto">
                        <h1>Detalles de habitación</h1>
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th>ID room</th>
                                    <td>aqui va el room</td>
                                </tr>
            
                                 
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6 col-12">
                        <div className="form-group">
                            <label htmlFor="Fromdate" className="font-weight-bolder mr-3">Desde : </label>
                     
                                
                            
                        </div>
                
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="form-group">
                            <label htmlFor="Todate" className="font-weight-bolder mr-3">Hasta :    </label>
                            



                        </div>
                    </div>
                </div>
               
              
                <div className="row p-2">
                    <div className="col-md-6 col-12 my-4">
                        <h6 className="font-weight-bolder">Días de reserva:</h6>
                        <mark>Por favor, asegurese de realizar su salida en la hora indicada</mark>
                        
                    </div>
                
                    <div className="col-md-6 col-12 my-4 ">
                        <h6 className="font-weight-bold">Precio por día : <span className="text-primary">$</span>  </h6>
                        <h6 className="font-weight-bold">Descuento : <span className="text-primary">$</span>  </h6>
                        <h6 className="font-weight-bold">Total a pagar: <span className="text-primary">$</span></h6>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
export default  Reserva