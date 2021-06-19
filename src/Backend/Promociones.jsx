
import { useEffect } from 'react'
import Panel from './Panel';
const Promociones =({ setNavbar }) => {
    useEffect(() => {
        setNavbar(true);
      }, [setNavbar]);
      return (
        <div>
           <Panel></Panel>
           <div>
            
               <h1>Promociones</h1>
           </div>

        </div>
        
    )
}

export default Promociones
