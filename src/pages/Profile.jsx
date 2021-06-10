import React from 'react'
import { withRouter } from "react-router-dom";
import {auth,db} from '../firebase'
import fotoPerfil from '../images/FotoPerfil.png';


const Profile = (props) => {
    var usuario = auth.currentUser;
    const data = db.collection('usuarios');
 
 //   const [listData, setListData] = React.useState([]   )
    const [user, setUser] = React.useState(null)
    const [nombreUsuario, setNombreUsuario] = React.useState("")
    const [ci, setCi] = React.useState("")
    const [cellphone, setCellphone] = React.useState("")
    const [email, setEmail] = React.useState(usuario.email)
    const [direction, setdDirection] = React.useState("")
    const [photo, setPhoto] = React.useState()
    const [activarFormulario, setActivarFormulario] = React.useState(false)
    const [activarFormulario2, setActivarFormulario2] = React.useState(true)
  


    const  editar = async () => {
        await data.doc(usuario.email).update({
            name: nombreUsuario,
            ci: ci,
            cellphone: cellphone,
            direction: direction


          })

    }
  
    React.useEffect(() => {
        if(auth.currentUser){
           // console.log('Usuario existe')
            
            const obtenerDatos = async () => {
                  try {
                    const snapshot = await data.get();
                    const arrayData=snapshot.docs.map((doc) => (
                        {
                        ...doc.data()
                    }))
                    console.log("id del usuario actual",usuario.uid)
                    //console.log(usuario.uid,arrayData[0]["name"])  
                    for (let i = 0; i < arrayData.length; i++) {
                        const element = arrayData[i];
                        console.log(element.uid)
                        if (element.uid == usuario.uid) {
                            setNombreUsuario(element.name)
                            setCi(element.ci)
                            setCellphone(element.cellphone)
                            setdDirection(element.direction)
                        }
                    }
                  //  setListData (arrayData)
                } catch (error) {
                  console.log(error)
                }
              }
              obtenerDatos()
            setUser(auth.currentUser)
        }else{
            console.log('no existe')
            props.history.push('/login')
        }
    }, [])
      
   


    return (
        <div className="col-md-8 col-12 mx-auto mt-5 p-5 " >
            

            
            <div className="card shadow-lg border-0  mt-5 mb-5 text-center">
                    {
                    activarFormulario2 &&
                        <div className="card-body">
                                <h1 className="card-title mt-3 text-center ">Perfil de usuario</h1>
                                <img src={fotoPerfil} alt="" width="200px" className="img-fluid"/>
                                <h5 className="card-title mt-3 text-center ">Nombre: {nombreUsuario}</h5>
                                <h5 className="card-title mt-3 text-center">Cédula: {ci}</h5>
                                <h5 className="card-title mt-3 text-center">Teléfono: {cellphone}</h5>
                                <h5 className="card-title mt-3 text-center">Dirección: {direction}</h5>
                                <p className="card-text mt-3">Email: {email}</p>
                                <button className='btn btn-dark' onClick={() => {
                                    setActivarFormulario(true);
                                    setActivarFormulario2(false);
                                }}>Editar</button>
                                <hr></hr>
                        </div>
                    }
                    
                    {
                        activarFormulario &&
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <h1 className="card-title mt-2 text-center mb-4">Editar Perfil de usuario</h1>
                                <div className="col-md-5">

                                <div className="input-group mb-3">
                                        <h5 className="card-title mt-3 text-center pd-3 col-md-3">Nombre:</h5>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            value={nombreUsuario} 
                                            placeholder="nombreUsuario"
                                            onChange={e => setNombreUsuario(e.target.value)}
                                        />
                          
                                    </div>
                                  
                                    <div className="input-group mb-3">
                                        <h5 className="card-title mt-3 text-center col-md-3">Cédula: </h5>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            value={ci} 
                                          
                                            onChange={e => setCi(e.target.value)}
                                        />
                          
                                </div>
                                <div className="input-group mb-3">
                                        <h5 className="card-title mt-3 text-center col-md-3">Teléfono: </h5>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            value={cellphone} 
                                          
                                            onChange={e => setCellphone(e.target.value)}
                                        />
                          
                                </div>
                                <div className="input-group mb-3">
                                        <h5 className="card-title mt-3 text-center col-md-3">Dirección: </h5>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            value={direction} 
                                          
                                            onChange={e => setdDirection(e.target.value)}
                                        />
                          
                                </div>
                                </div>
                            </div>
                            <button className='btn btn-dark' 

                            onClick={() =>{
                                editar();
                                setActivarFormulario(false);
                                setActivarFormulario2(true);
                            }}>Actualizar</button>
                        </div>
                        
                    }
            </div> 
        </div>
    )
}

export default  withRouter(Profile)
