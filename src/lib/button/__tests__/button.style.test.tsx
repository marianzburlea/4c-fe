import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Button } from '../button.style'
import theme from '../../../config/theme'

describe('Button component', () => {
  it('should render the <Button /> styled component with auto width', () => {
    const dataTestid = 'button-test-component'
    render(
      <ThemeProvider theme={theme}>
        <Button fullWidth type="submit" data-testid={dataTestid} />
      </ThemeProvider>
    )

    expect(screen.getByTestId(dataTestid)).toHaveStyleRule(
      'background-color',
      'transparent'
    )

    expect(screen.getByTestId(dataTestid)).toHaveStyleRule('width', '100%')
  })
})
