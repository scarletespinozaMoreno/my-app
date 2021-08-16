import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Banner from '../components/Banner'

test('render content', () => {
    const titl1e = 'pagina1'
    const children = 'pagina2'
    const subtitle = 'pagina3'
    const component1 = render(<Banner title={titl1e}/>)
    const component2 = render(<Banner title={children}/>)
    const component3 = render(<Banner title={subtitle}/>)
    component1.getByText('pagina1')
    component2.getByText('pagina2')
    component3.getByText('pagina3')





}) 