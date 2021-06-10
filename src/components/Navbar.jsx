import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import jquery from 'jquery';
// for changing navbar  color
import {auth} from '../firebase'

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
            <div className="container-fluid mb-3">
                <span className="navbar-brand font-weight-bolder">Hostería Ríos y Montañas</span>
                <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <FaAlignRight className="nav-icon" /></span>
                </a>
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2" id="navbarSupportedContent">
                    <ul className="navbar-nav  mr-auto">
                            <NavLink className="nav-link"  exact to="/">Inicio</NavLink>
                            <NavLink className="nav-link"  exact to="/rooms">Habitaciones</NavLink>
                            <NavLink className="nav-link"  exact to="/Nosotros">Nosotros</NavLink>
                            <NavLink className="nav-link"  exact to="/Contact">Contáctanos</NavLink>
                    </ul>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 justify-content-end dual-collapse2" id="navbarSupportedContent">

                    
                            {
                        props.firebaseUser !== null ? (
                            <ul className="navbar-nav ml-auto "  >   
                                <NavLink className="nav-link" exact to="/Reservas/">Mis Reservas</NavLink>
                                <NavLink className="nav-link" exact to="/Profile/">Perfil</NavLink>
                                <button className="btn btn-outline-light" onClick={() => cerrarSesion()}>Cerrar Sesión</button>
                                
                            </ul>
                        
                        
                        ): (
                            <ul className="navbar-nav ml-auto "  >
                                    <NavLink className="nav-link ml-auto" to="/Login">Login</NavLink>
                            </ul>
                       
                        )
                    }
                       
                    
                </div> 
                
            </div>
        </nav>
    </>
    );
}
export default withRouter(Navbar)