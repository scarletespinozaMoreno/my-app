import React from 'react'
import { withRoomConsumer } from '../context';
import Loading from './Loading';
import RoomFinal from '../pages/RoomFinal'
import RoomFilter from '../components/RoomsFilter'

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
