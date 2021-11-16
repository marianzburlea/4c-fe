import { createContext, ReactNode, useContext, useReducer } from 'react'

import { todoReducer } from './reducer'
import * as T from './type'

const appData: T.AppData = {
  list: [
    { id: 1, title: 'First default uncomplete to-do item', completed: false },
    { id: 2, title: 'Second default uncomplete to-do item', completed: false },
    { id: 3, title: 'First default to-do item', completed: true },
  ],
}

const AppProvider = createContext(appData)

const StateProvider = ({ children }: { children: ReactNode }) => {
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

export { StateProvider }
