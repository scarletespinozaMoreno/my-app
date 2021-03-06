import React, { Component,useState } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import DatePicker, {registerLocale}from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es'
import {RoomContext} from '../context/RoomProvider';
import {auth,db} from '../firebase';
import BotonPayPal from "../components/botonPaypal";

registerLocale("es",es)

export const habitacionContext=React.createContext()


export default class Booknow extends Component {
    
    

    
    constructor (props){
        super(props);
        this.state = {
            nombre: " ",
            precio: 0,
            total: 0,
            diasFuera: 0,
            id:"",
            imagen:"",
            imagenes: [],
            existencia:"",
            startDate: null,
            endDate: null,
    };
    
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    }
 
    
    handleChangeStart(date) {
        this.setState({
        startDate: date
        });
    }
    handleChangeEnd(date) {
        this.setState({
        endDate: date
        });
    }
    savedata(){
       
        this.state.endDate=new Date(this.state.endDate)
        this.state.startDate=new Date(this.state.startDate)
       const id = auth.currentUser.email
       const user =db.collection('usuarios').doc(id).collection("reservas").add(
          this.state
       )
       console.log("INFO ACTUAL",user)
    }


    mostrardato(){
        console.log("mi total",this.state )

    }
      calculateDaysLeft(startDate, endDate) {
          if (!moment.isMoment(startDate)) startDate = moment(startDate);
          if (!moment.isMoment(endDate)) endDate = moment(endDate);
          return endDate.diff(startDate, "days");
      }
  
      static contextType = RoomContext;
     
    render() {
        
        
        const room =  this.context

        const { startDate, endDate } = this.state;
        
        const daysLeft = this.calculateDaysLeft(startDate, endDate);
        const total=daysLeft*room.room.precio
        this.state.precio=room.room.precio
        this.state.nombre=room.room.categoria
        this.state.id=room.room.nombre
        this.state.total=total
        this.state.diasFuera=daysLeft
        this.state.existencia = true 
        this.state.imagen=room.room.imagen
        return (
            <div className="container my-10 mt-5 p-5">
            <div className="row mt-6 ">
                <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4  mt-10">
                    <div>
                        <h1 className="display-4  mt-10">Registro</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 my-auto">
                            <img src={room.room.imagen} className="img-fluid" alt="selected room" />
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <h1>Detalles de habitaci??n</h1>
                            <table className="table ">
                                <thead className="thead-light">
                                    <tr>
                                        <th>ID room</th>
                                        <td>{room.room.nombre}</td>
                                    </tr>
                                    <tr>
                                        <th>Capacidad</th>
                                        <td>este numero es dado por la base de datos</td>
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
                                <DatePicker     
                                    locale="es"
                                    selected={this.state.startDate} 
                                    onChange={this.handleChangeStart} 
                                    className="form-control  " 
                                    placeholderText="Fecha de inicio"
                                    minDate={new Date()}
                                    dateFormat="MMMM d, yyyy" />
                                    
                                
                            </div>
                    
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Todate" className="font-weight-bolder mr-3">Hasta :    </label>
                                <DatePicker 
                                locale="es"
                                selected={this.state.endDate} 
                                minDate={new Date()}
                                onChange={this.handleChangeEnd} 
                                placeholderText="Fecha Fin"   
                                className="form-control" 
                                dateFormat="MMMM d, yyyy" />

 

                            </div>
                        </div>
                    </div>
                   
                  
                    <div className="row p-2">
                        <div className="col-md-6 col-12 my-4">
                            <h6 className="font-weight-bolder">D??as de reserva: {daysLeft}</h6>
                            <mark>Por favor, asegurese de realizar su registro entre las 9 am y 12 pm</mark>
                            
                        </div>
                    
                        <div className="col-md-6 col-12 my-4 ">
                            <h6 className="font-weight-bold">Precio por d??a : <span className="text-primary">${room.room.precio}</span>  </h6>
                           
                            <h6 className="font-weight-bold">Total a pagar : <span className="text-primary">$ {total}</span></h6>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="payment" className="font-weight-bolder mb-1">Opciones de pago</label>
                                <select className="form-control">
                                    <option disabled>Seleccione m??todo de pago </option>
                                    <option value="Credit">Cr??dito</option>
                                    <option value="Debit">D??bito</option>
                                    <option value="Debit">Paypal</option>
                                
                                </select>
                                <BotonPayPal />
                            </div>
                        </div>
                        <div className="col-md-6 col-12 my-4 ">
                            <div className="col-md-6 col-12 float-right my-1 px-4">
                                <Link to="/" className="btn btn-block btn-outline-primary center " 
                                data-toggle="modal" 
                                data-target="#thanks"
                                onClick={()=>{
                                    this.savedata();
                                    this.mostrardato()}}
                                
                                >Confirmar Registro</Link>
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
                            <p className="lead">Su habitaci??n ha sido registrada con ??xito!....</p>
                        </div>
                        <div className="modal-footer">
                            <Link to="/" className="btn btn-dark">Ir al inicio</Link>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    )
    }
}