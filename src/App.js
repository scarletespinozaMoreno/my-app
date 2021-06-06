import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Booknow from './pages/Booknow';
import Login from './pages/login';
import Reset from './components/Reset';
import {auth } from './firebase'
function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false)

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
        <Navbar firebaseUser={firebaseUser}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Nosotros" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/rooms/" component={Rooms}/>
          <Route exact path="/Login/" component={Login}/>
          <Route exact path="/Reset/" component={Reset}/>
          <Route exact path="/rooms/:slug" component={SingleRoom} />
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