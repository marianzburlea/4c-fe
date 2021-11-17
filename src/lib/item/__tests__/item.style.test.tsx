import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Item } from '../item.style'

describe('Item component', () => {
  it('should render the <Item /> styled component with auto width', () => {
    const dataTestid = 'item-test-component'
    render(<Item data-testid={dataTestid} />)

    expect(screen.getByTestId(dataTestid)).toHaveStyleRule('width', 'auto')
  })
})
