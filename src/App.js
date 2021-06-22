import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
 
import SingleRoom2 from './pages/SingleRoom2';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import About from './pages/About';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import Dashboard from './Backend/Dashboard';
import Habitaciones from './Backend/Habitaciones';
import Promociones from './Backend/Promociones';
import Usuarios from './Backend/Usuarios';
import Alimentos from './Backend/Alimentos';
import Contact from './pages/Contact';
import Booknow from './pages/Booknow';
import Login from './pages/login';
import Reset from './components/Reset';
import {auth } from './firebase'
import RoomProvider from './context/RoomProvider'

function App(props) {
  const [firebaseUser, setFirebaseUser] = React.useState(false)
  var [isNavbarHidden, setIsNavbarHidden] = React.useState(false);
 
  React.useEffect(() => {
      auth.onAuthStateChanged(user => {
          console.log(user)
          if(user){
              setFirebaseUser(user)
          }else{
              setFirebaseUser(null)
          }
      })
  }, [])
  return firebaseUser !== false ?(
    <div className="App">
      <BrowserRouter>
      {isNavbarHidden ? null : <Navbar firebaseUser={firebaseUser} />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Nosotros" component={About} />
          <Route exact path="/Dashboard"  render={() => <Dashboard setNavbar={setIsNavbarHidden}  />} />
          <Route exact path="/Habitaciones"  render={() => <Habitaciones  setNavbar={setIsNavbarHidden}  />} />
          <Route exact path="/Promociones"  render={() => <Promociones  setNavbar={setIsNavbarHidden}  />} />
          <Route exact path="/Usuarios"  render={() => <Usuarios  setNavbar={setIsNavbarHidden}  />} />
          <Route exact path="/Alimentos"  render={() => <Alimentos setNavbar={setIsNavbarHidden}  />} />
          <Route exact path="/contact" component={Contact} />
          <RoomProvider>
          <Route exact path="/rooms/" component={Rooms}/>
          <Route exact path="/Login/" component={Login}/>
 
          <Route exact path="/Profile/" component={Profile}/>
          <Route exact path="/Reset/" component={Reset}/>
     
        <Route exact path="/rooms/:categoria">
            <SingleRoom2/>
          </Route>
          </RoomProvider> 
          <Route exact path="/booknow/:slug" component={Booknow} />
          
          <Route component={Error}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
   ): (
    <div>Cargando...</div>
)
}


export default App;