import { render, screen } from '@testing-library/react'
import App from './App'

test('Renders successfully', () => {
  render(<App />)

  expect(screen.getByText(/Rocket-Boost/)).toBeInTheDocument()
})
