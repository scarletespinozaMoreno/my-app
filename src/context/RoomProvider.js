import React from 'react'

export const RoomContext=React.createContext()

const RoomProvider =(props)=>{
    const getRoom={
        categoria:'',
        descripcion:'',
        existencia:'',
        imagen:'',
        nombre:'',
        precio:'',
    }
    const[room,setRoom]=React.useState(getRoom)
 return(
    <RoomContext.Provider value={{room,setRoom}}>
        {props.children}
    </RoomContext.Provider>


 )


}
export default RoomProvider