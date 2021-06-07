import React from 'react';
import {db} from '../firebase';
 

 
const Contact = () => {
const [nombre,setNombre]=React.useState('')
const [apellido,setApellido]=React.useState('')
const [email,setEmail]=React.useState('')
const [mensaje,setMensaje]=React.useState('')
const [telefono,setTelefono]=React.useState('')
//const notify=()=>{ }


const submitForm=async(e)=>{
    e.preventDefault();
    if(!nombre.trim()||!apellido.trim()||!email.trim()||!mensaje.trim()||!telefono.trim()){
        console.log('elemento vacio')
        return
    }
 
    try {
        await db.collection('mensajes').add({
            nombre :nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            mensaje:mensaje,
            fecha :Date.now()
        })
 
        setNombre('')
        setApellido('')
        setEmail('')
        setTelefono('')
        setMensaje('')
    } catch (error) {
        console.log("error")
    }


    
}

 
return (
    <div>
            <div className="container mt-5 mb-5 p-5">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="card shadow-lg border-0 p-4">
                            <h1 className="text-center bg-dark text-white display-4 d-inline-block">Contáctanos</h1>
                            <form onSubmit={submitForm} className="form-group my-5 text-center">
                                
                                
                                <div className="row">
                                    <div className="col-md-6 col-12 mx-auto my-2">
                                        <input type="text" className="form-control-lg"  
                                        onChange={e=>setNombre(e.target.value)}
                                        value={nombre}
                                        placeholder="Nombre" required />
                                    </div>
                                    <div className="col-md-6 col-12 mx-auto my-2">
                                        <input type="text" className="form-control-lg" 
                                        onChange={e=>setApellido(e.target.value)}
                                        value={apellido}
                                        placeholder="Apellido" required />
                                    </div>
                                </div>
                             
                                <div className="form-group mb-5">
                                    <div className="row">
                                        <div className="col-md-6 col-12 mx-auto my-2">
                                            <input type="email" className="form-control-lg" 
                                            onChange={e=>setEmail(e.target.value)}
                                            value={email}
                                            placeholder="Correo Electrónico" required />
                                        </div>
                                        <div className="col-md-6 col-12 mx-auto my-2">
                                            <input type="tel" className="form-control-lg" 
                                            onChange={e=>setTelefono(e.target.value)}
                                            value={telefono}
                                            placeholder="Teléfono" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-11">
                                        <textarea className="form-control" row="20" 
                                        onChange={e=>setMensaje(e.target.value)}
                                        value={mensaje}
                                        placeholder="Su mensaje..." required></textarea>
                                    </div>
                                </div>
                                <div className="mt-5 col-md-6 col-12 mx-auto  ">
                                    
                                    <button 
                                    type="submit"
                                   
                                    className="btn btn-outline-dark btn-lg btn-block">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>

)
}
export default Contact