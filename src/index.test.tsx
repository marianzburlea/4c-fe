import { render } from 'react-dom'

import { start } from '.'
jest.mock('react-dom')
const mockRenderer = render as jest.Mocked<typeof render>

describe('to do app', () => {
  let oldQuerySelector: any

  beforeAll(() => {
    oldQuerySelector = document.querySelector
  })

  afterAll(() => {
    document.querySelector = oldQuerySelector
  })

  it('should render the app', () => {
    document.querySelector = jest
      .fn()
      .mockImplementation((id) => (id === 'test' ? '111' : '222'))
    start()

    expect(mockRenderer).toHaveBeenCalled()
  })
})
