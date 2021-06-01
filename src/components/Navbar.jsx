import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import jquery from 'jquery';
// for changing navbar  color
import {auth} from '../firebase'
import { withRouter } from "react-router-dom";
jquery(window).scroll(function() {
    jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 0);
    })


const Navbar = (props) => {

        const cerrarSesion = () => {
            auth.signOut()
                .then(() => {
                    props.history.push('/Login')
                })
        }
    return (
    <>
        <nav className="navbar navbar-expand-sm navbar-dark py-2 fixed-top">
            <div className="container-fluid ">
                <span className="navbar-brand font-weight-bolder">Hostería Ríos y Montañas</span>
                <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <FaAlignRight className="nav-icon" /></span>
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                            <NavLink className="nav-link"  exact to="/">Inicio</NavLink>
                            <NavLink className="nav-link"  exact to="/rooms">Habitaciones</NavLink>
                            <NavLink className="nav-link"  exact to="/Nosotros">Nosotros</NavLink>
                            <NavLink className="nav-link"  exact to="/Contact">Contáctanos</NavLink>
                            
                            {
                        props.firebaseUser !== null ? (
                        <button 
                        class="btn btn-outline-light"
                            onClick={() => cerrarSesion()}
                        >
                            Cerrar Sesión
                        </button>
                        ): (
                        <NavLink 
                            className="nav-link" 
                            to="/Login"
                        >
                            Login
                        </NavLink>
                        )
                    }
                       
                    </ul>
                    
                </div>
            </div>
        </nav>
    </>
    );
}
export default withRouter(Navbar)