import { useEffect } from 'react'
import Panel from './Panel';
const Usuarios =  ({ setNavbar }) => {
    useEffect(() => {
        setNavbar(true);
      }, [setNavbar]);
      return (
        <div>
           <Panel></Panel>

        </div>
        
    )
}

export default Usuarios
