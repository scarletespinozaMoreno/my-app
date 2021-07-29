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
        <nav className="navbar navbar-expand-lg navbar-dark py-2 fixed-top ">
            <div className="container-fluid">
                 
                <a className="navbar-brand" href="/">Hostería Ríos y Montañas    </a>
                <button className="navbar-toggler" 
                    type="button" 
                     data-bs-toggle="collapse" 
                     data-bs-target="#responsive-navbar-nav"
                     aria-controls="responsive-navbar-nav"
                     aria-expanded="false"
                     aria-label="Toggle navigation">
                    <span>
                        <FaAlignRight className="nav-icon" /></span>
                </button>
                <div className="collapse navbar-collapse" id="responsive-navbar-nav">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link  " activeClassName="active_class"  exact to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  "  activeClassName="active_class"  exact to="/rooms">Habitaciones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  "  activeClassName="active_class"  exact to="/Actividades">Actividades</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  activeClassName="active_class"  exact to="/Nosotros">Nosotros</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link"  activeClassName="active_class"  exact to="/Contact">Contáctanos</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 justify-content-end dual-collapse2" id="navbarSupportedContent">

                    
                            {
                        props.firebaseUser !== null ? (
                            <ul className="navbar-nav ml-auto "  >
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/Promociones">Promociones</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/Reserva/">Mis Reservas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/Profile/">Perfil</NavLink>
                                </li>
                                <li className="nav-item text-center">
                                    <button className="btn btn-outline-light text-center" onClick={() => cerrarSesion()}>Cerrar Sesión</button>
                                </li>
                            </ul>
                        
                        
                        ): (
                            <ul className="navbar-nav ml-auto "  >
                                 <li className="nav-item"> 
                                    <NavLink className="nav-link ml-auto" to="/Login">Login</NavLink>
                                 </li>
                                    
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