import React, { Component } from 'react'
 
import { Link } from 'react-router-dom';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {RoomContext} from '../context/RoomProvider'
export const habitacionContext=React.createContext()



const Booknow2 =(props)=>{    
    const{room,cambioRoom}=React.useContext(RoomContext)
  
 
    
    return(
        <>
    
       
       
    
        <div className="container col-md-8 col-12 mx-auto mt-5 p-5">
            <div className="row  mt-10">
                <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4  mt-10">
                    <div>
                        <h1 className="display-4  mt-10">Registro</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 my-auto">
                            <img src={room.imagen} className="img-fluid" alt="selected room" />
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <h1>Detalles de habitación</h1>
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>ID room</th>
                                        <td>{room.nombre}</td>
                                    </tr>
                                    <tr>
                                        <th>Capacidad</th>
                                        <td>1</td>
                                    </tr>
 
                                    <tr>
                                        <th>Desayuno</th>
                                        <td> Desayuno gratis incluido</td>
                                    </tr>
                                    <tr>
                                        <th>Mascotas </th>
                                        <td> No se admite</td>
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
                                <label htmlFor="Todate" className="font-weight-bolder mr-3">Hasta : </label>
                               


                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h6 className="font-weight-bolder">Número de días : 2</h6>
                            <mark>Por favor, asegurese de realizar su registro entre las 9 am y 12 pm</mark>
                        </div>
                        <div className="col-md-6 col-12">
                            <h6 className="font-weight-bold">Price per day : <span className="badge badge-info">$ {room.precio}</span></h6>
                            <h6 className="font-weight-bold">Total Price to be paid : <span className="text-primary">${2*room.precio}</span></h6>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="payment" className="font-weight-bolder">Opciones de pago</label>
                                <select className="form-control">
                                    <option disabled>Seleccione método de pago </option>
                                    <option value="Credit">Credito</option>
                                    <option value="Debit">Debito</option>
                                    <option value="checkin">Pagar en el checking</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <div className="col-md-6 col-12 float-right">
                                <button className="btn btn-block btn-outline-primary" data-toggle="modal" data-target="#thanks"
                                
                                >Confirmar Registro</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="thanks">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-4">
                            <h3>Gracias! </h3>
                            <p className="lead">Su habitación ha sido registrada con éxito!....</p>
                        </div>
                        <div className="modal-footer">
                            <Link to="/" className="btn btn-dark">Ir al inicio</Link>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )  


}
export default   Booknow2