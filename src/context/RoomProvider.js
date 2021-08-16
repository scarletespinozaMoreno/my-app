 
import React from 'react'

export const RoomContext=React.createContext()

const RoomProvider =(props)=>{
    const getRoom={
        categoria:'',
        descripcion:'',
        existencia:'',
        imagen:'',
        nombre:'',
        precio:'none',
    }
    const[room,setRoom]=React.useState(getRoom)
    React.useEffect(()=>{
        if(localStorage.getItem('roomLocal')){
            const roomLocal=JSON.parse(localStorage.getItem('roomLocal'))
            setRoom(roomLocal)
        }

    },[])

    const cambioRoom= valor =>{
        
        localStorage.setItem('roomLocal',JSON.stringify(valor))
        setRoom(valor)
    }
 return(
    <RoomContext.Provider value={{room,cambioRoom}}>
        {props.children}
    </RoomContext.Provider>


 )


}
export default RoomProvider