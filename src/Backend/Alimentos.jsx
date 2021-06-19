import React from 'react'
import Panel from './Panel';
import { useEffect } from 'react'
const Alimentos = ({ setNavbar }) => {
    useEffect(() => {
        setNavbar(true);
      }, [setNavbar]);
      return (
        <div>
           <Panel></Panel>

        </div>
        
    )
}

export default Alimentos
