import { createContext, ReactNode, useContext } from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
// import { act } from 'react-dom/test-utils'

import TodoList from '.'
import theme from '../../config/theme'

describe('Render the to-do list component', () => {
  const dispatch = jest.fn()
  const dataTestid = 'todo-list-test-component'
  const state = {
    list: [
      { timestamp: 123123, title: 'super test', completed: false },
      { timestamp: 123126, title: 'mega test', completed: true },
    ],
  }

  const value = {
    state,
    dispatch,
  } as any

  const ctx = createContext(state)

  // const useC = useContext(ctx)
  it('should render the <TodoList /> component', () => {
    const dataTestid = 'todo-list-test-component'
    render(
      <ctx.Provider value={value}>
        <ThemeProvider theme={theme}>
          <TodoList list={[]} dataTestid={dataTestid} />
        </ThemeProvider>
      </ctx.Provider>
    )

    expect(screen.getByTestId(dataTestid)).toBeInTheDocument()
  })

  // it('should render the <TodoList /> component and add item', async () => {
  //   act(() => {
  //     const { debug } = render(
  //       <ThemeProvider theme={theme}>
  //         <ctx.Provider value={value}>
  //           <TodoList list={[]} dataTestid={dataTestid} />
  //         </ctx.Provider>
  //       </ThemeProvider>
  //     )
  //     debug()
  //     console.log(value)
  //   })
  //   const input = screen.getByTestId(
  //     `input-test-component-input`
  //   ) as HTMLButtonElement
  //   const submitButton = screen.getByTestId(`${dataTestid}-submit`)

  //   // const input = screen.getByTestId(`${dataTestid}-input`) as HTMLButtonElement
  //   act(() => {
  //     // fireEvent.change(input, { target: { value: 'test123' } })
  //     // fireEvent.click(submitButton)
  //   })
  //   expect(dispatch).not.toHaveBeenCalled()

  //   expect(screen.getByTestId(dataTestid)).toBeInTheDocument()
  // })
})
