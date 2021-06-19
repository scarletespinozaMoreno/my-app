import { useEffect } from 'react'
import Panel from './Panel';
const Dashboard = ({ setNavbar }) => {
    useEffect(() => {
        setNavbar(true);
      }, [setNavbar]);
    return (
        <div>
           <Panel></Panel>
           <h1>Dashboard</h1>
        </div>
        
    )
}

export default Dashboard
