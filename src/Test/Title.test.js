import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Title from '../components/Title'

test('render content', () => {
    const titl1e = 'pagina1'
    const component = render(<Title title={titl1e}/>)
    component.getByText('pagina1')
}) 