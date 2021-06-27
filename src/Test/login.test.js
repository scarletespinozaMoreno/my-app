import React from 'react'
import '@testing-library/jest-dom/extend-expect' 
import{render,screen} from '@testing-library/react'
import Login from '../pages/login'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Login Page',() =>{
     it('must display a titlee',() =>{
          render(<Router><Login / ></Router>) 
          expect(screen.queryByText( /iniciar sesión/i)).toBeInTheDocument()
      
      })
})