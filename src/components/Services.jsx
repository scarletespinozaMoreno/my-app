import React, { Component } from 'react'
import Title from './Title'
import {FaHotel} from 'react-icons/fa'
import {IoFastFoodSharp} from "react-icons/io5";
import {GiHorseHead} from "react-icons/gi";
import {MdPool} from "react-icons/md";

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaHotel/>,
                title: "Hospedaje",
                info: "Alójate y reserva habitaciones para disfrutar de nuestras instalaciones."
            },
            {
                icon:<IoFastFoodSharp/>,
                title: "Alimentación",
                info: "Disfrutarás de la verdadera comida ecuatoriana"
            },
            {
                icon:<GiHorseHead/>,
                title: "Paseo en caballo",
                info: "Vive la experiencia de montar a caballo por nuestra hostería"
            },
            {
                icon:<MdPool/>,
                title: "Piscinas",
                info: "Toma un descanso y relájate en nuestras piscinas."
            },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Nuestros servicios" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}