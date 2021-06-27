import React from 'react'
import '@testing-library/jest-dom/extend-expect' 
import{render} from '@testing-library/react'
import Login from '../pages/login'


test('Debe renderizaeset',() =>{
     const{getByTestId}= render( <Login />)
      const input=getByTestId("email")
      const pass =getByTestId("password")

      const inpurValue="scarletespinoza"
      button.click()
})