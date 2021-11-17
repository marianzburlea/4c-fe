import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from 'react'

import { appData, todoReducer } from './reducer'
// import * as T from './type'

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
