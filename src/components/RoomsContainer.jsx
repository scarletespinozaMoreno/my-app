import React from 'react'
//import RoomsFilter from './RoomsFilter';
//import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';
      // <RoomsList rooms = {sortedRooms}/>
import RoomFinal from '../pages/RoomFinal'
import RoomFilter from '../components/RoomsFilter'

//<RoomsFilter rooms={rooms}/>

function RoomsContainer({context}){
    const{loading} = context;
    if(loading)
    {
        return <Loading/>;
    }
    return(
        <>
            
            <RoomFilter />
           
        </>
    );

}
export default withRoomConsumer(RoomsContainer)
