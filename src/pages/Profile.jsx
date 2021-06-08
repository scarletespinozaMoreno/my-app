import React from 'react'
import { withRouter } from "react-router-dom";
import {auth} from '../firebase'
import fotoPerfil from '../images/FotoPerfil.png';
const Profile = (props) => {
    var usuario = auth.currentUser;
    const [user, setUser] = React.useState(null)
    const [nombreUsuario, setNombreUsuario] = React.useState(usuario.displayName)
    const [email, setEmail] = React.useState(usuario.email)
    const [photo, setPhoto] = React.useState(usuario.photoURL)
    const [activarFormulario, setActivarFormulario] = React.useState(false)
    React.useEffect(() => {
        if(auth.currentUser){
            console.log('existe')
            setUser(auth.currentUser)
        }else{
            console.log('no existe')
            props.history.push('/login')
        }
    }, [props.history])
      
   


    return (
        <div className="col-md-8 col-12 mx-auto mt-5 p-5 " >
            <div className="card shadow-lg border-0  mt-5 mb-5 text-center">
                    <div className="card-body">
                            <img src={fotoPerfil} alt="" width="100px" className="img-fluid"/>
                            <h5 className="card-title mt-3 text-center">Nombre: {nombreUsuario}</h5>
                            <p className="card-text mt-3">Email: {email}</p>
                            <button className='btn btn-dark' onClick={() => setActivarFormulario(true)}>Editar Nombre</button>
                   
                    </div>
                    {
                        activarFormulario &&
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            value={nombreUsuario} 
                                            onChange={e => setNombreUsuario(e.target.value)}
                                        />
                                        <div className="input-group-append">
                                            <button 
                                                className="btn btn-dark" 
                                                type="button" 
                                                
                                            >
                                                Actualizar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
            </div> 
        </div>
    )
}

export default  withRouter(Profile)
