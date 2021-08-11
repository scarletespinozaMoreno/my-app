import React from 'react'
export const RoomsContext = React.createContext()

const RoomsProvider = (props) => {
  const arrayRooms=["habitacion1"]
  return (
  <RoomsContext.Provider value={{arrayRooms}}>
    {props.children}
  </RoomsContext.Provider>
  )
}

export default RoomsProvider
