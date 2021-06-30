import React from 'react'
import RoomsFilter from './RoomsFilter';
//import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';
      // <RoomsList rooms = {sortedRooms}/>
import RoomFinal from '../pages/RoomFinal'

//<RoomsFilter rooms={rooms}/>

function RoomsContainer({context}){
    const{loading,sortedRooms,rooms} = context;
    if(loading)
    {
        return <Loading/>;
    }
    return(
        <>
            
           
            <RoomFinal/>
        </>
    );

}
export default withRoomConsumer(RoomsContainer)
