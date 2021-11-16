import { createContext, ReactNode, useContext, useReducer } from 'react'

import { todoReducer } from './reducer'
import * as T from './type'

const appData: T.AppData = {
  list: [
    {
      timestamp: 1637092237826,
      title: 'Second default uncomplete to-do item',
      completed: false,
    },
    {
      timestamp: 1637092227826, // time is 10 seconds lesser than the previous item
      title: 'Frist default uncomplete to-do item',
      completed: false,
    },
    {
      timestamp: 1637092247826,
      title: 'First default to-do item',
      completed: true,
    },
  ],
}

const AppProvider = createContext(appData)

const ToDoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, appData)
  return (
    <AppProvider.Provider
      value={
        {
          state,
          dispatch,
        } as any
      }
    >
      {children}
    </AppProvider.Provider>
  )
}

export const useSiteState = () => {
  return useContext(AppProvider)
}

export * as action from './action'

export { ToDoProvider }
