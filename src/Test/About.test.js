import React from 'react'
import '@testing-library/jest-dom/extend-expect' 
import{render,screen} from '@testing-library/react'
import About from '../pages/About'
import { BrowserRouter as Router } from 'react-router-dom';

describe('About Page',() =>{
    it('must display a title',() =>{
         render(<Router><About / ></Router>) 
         expect(screen.queryByText( /Sobre nosotros/i)).toBeInTheDocument()
     
     })
})