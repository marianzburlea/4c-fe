import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Error } from '../input.style'
import theme from '../../../config/theme'
import { ThemeProvider } from 'styled-components'

describe('Error component', () => {
  it('should render the <Error /> styled component with auto width', () => {
    const dataTestid = 'error-test-component'
    render(
      <ThemeProvider theme={theme}>
        <Error data-testid={dataTestid} show />
      </ThemeProvider>
    )

    expect(screen.getByTestId(dataTestid)).toHaveStyleRule('opacity', '1')
  })
})
