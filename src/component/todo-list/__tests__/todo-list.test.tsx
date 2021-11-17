import React, { createContext, ReactNode, useContext, useReducer } from 'react'
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
// import { act } from 'react-dom/test-utils'

import TodoList from '..'
import theme from '../../../config/theme'
import { ToDoProvider } from '../../context'

describe('Render the to-do list component', () => {
  const dispatch = jest.fn()
  const dataTestid = 'todo-list-test-component'
  const defaultState = {
    list: [
      { timestamp: 123123, title: 'super test', completed: false },
      { timestamp: 123126, title: 'mega test', completed: true },
    ],
  }

  const ctx = createContext(defaultState)

  // useSiteState.mockReturnValue(jest.fn())
  const value = {
    state: defaultState,
    dispatch,
  } as any

  it('should render the <TodoList /> component', () => {
    render(
      <ctx.Provider value={value}>
        <ThemeProvider theme={theme}>
          <TodoList dataTestid={dataTestid} />
        </ThemeProvider>
      </ctx.Provider>
    )

    expect(screen.getByTestId(dataTestid)).toBeInTheDocument()
  })

  it('should render the <TodoList /> component and add item', async () => {
    // const mockUseContext = jest.fn().mockImplementation(() => ({
    //   state: defaultState,
    //   dispatch,
    // }))

    // React.useContext = mockUseContext

    const { debug } = render(
      <ctx.Provider value={value}>
        <ThemeProvider theme={theme}>
          <TodoList dataTestid={dataTestid} />
        </ThemeProvider>
      </ctx.Provider>
    )

    const input = screen.getByTestId(
      `input-test-component-input`
    ) as HTMLButtonElement
    const submitButton = screen.getByTestId(`${dataTestid}-submit`)

    // const input = screen.getByTestId(`${dataTestid}-input`) as HTMLButtonElement
    await waitFor(() => {
      fireEvent.change(input, { target: { value: 'test123' } })
    })

    await waitFor(() => {
      fireEvent.click(submitButton)
    })
    debug()

    expect(dispatch).toHaveBeenCalled()

    expect(screen.getByTestId(dataTestid)).toBeInTheDocument()
  })
})
