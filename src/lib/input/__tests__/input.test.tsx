import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Input from '..'
import theme from '../../../config/theme'
import { ThemeProvider } from 'styled-components'

describe('Error component', () => {
  it('should render the <Error /> styled component with auto width', () => {
    const dataTestid = 'error-test-component'
    render(
      <ThemeProvider theme={theme}>
        <Input dataTestid={dataTestid} touched dirty error="It is bad" />
      </ThemeProvider>
    )

    expect(screen.getByTestId(`${dataTestid}-error`)).toHaveStyleRule(
      'opacity',
      '1'
    )
  })
})
