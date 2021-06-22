import { useEffect } from 'react'
import Panel from './Panel';
const Dashboard = ({ setNavbar }) => {
    useEffect(() => {
        setNavbar(true);
      }, [setNavbar]);
    return (
        <div className="d-flex align-items-baseline" >
            <div className="row  row-cols-2 w-100 justify-content-start">
                <div className="col-2 vh-100">
                        <Panel></Panel>
                </div>
                <div className="col-8 vh-100">
                    <h1 className=" mt-5">Habitaciones</h1>
                </div>
                </div>
        </div>
       
         
    )
}

export default Dashboard
