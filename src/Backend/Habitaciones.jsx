import { useEffect } from 'react'
import Panel from './Panel';
const Habitaciones = ({ setNavbar }) => {
    useEffect(() => {
        setNavbar(true);
      }, [setNavbar]);
      return (
        <div>
        <Panel></Panel>
        <h1>Habitaciones</h1>
     </div>
     
    )
    
}

export default Habitaciones
