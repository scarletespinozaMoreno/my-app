import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Contact from '../pages/Contact'

describe ('Probando la funcion de contactanos', () =>{
    it('se envia el contactanos' , ()=>{
        const nombre = "albin"
        const apellido = "arias"
        const email = "albinloco@gmail.com "
        const mensaje = "hola este mensaje es para saludarte"
        const telefono = "0986720388"
        const component1 = render(<Contact nombre={nombre}/>)
        const component2 = render(<Contact nombre={apellido}/>)
        const component3 = render(<Contact nombre={email}/>)
        const component4 = render(<Contact nombre={mensaje}/>)
        const component5 = render(<Contact nombre={telefono}/>)
        component1.getAllByPlaceholderText('Nombre')
        component2.getAllByPlaceholderText('Apellido')
        component3.getAllByPlaceholderText('Correo Electrónico')
        component4.getAllByPlaceholderText('Teléfono')
        component5.getAllByPlaceholderText('Su mensaje...')



    })
}
);
