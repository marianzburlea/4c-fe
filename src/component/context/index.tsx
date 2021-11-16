import { createContext, ReactNode, useContext, useReducer } from 'react'

interface ToDo {
  title: string
  completed?: boolean
  id: number
}

interface AppData {
  list: ToDo[]
}

const appData: AppData = {
  list: [
    { id: 1, title: 'First default uncomplete to-do item', completed: false },
    { id: 2, title: 'Second default uncomplete to-do item', completed: false },
    { id: 3, title: 'First default to-do item', completed: true },
  ],
}

const todoReducer = (state: AppData, action: any) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        list: [...state.list, action.todo],
      }

    case 'REMOVE':
      return {
        ...state,
        list: state.list.filter(({ id }) => action.todo.id !== id),
      }

    case 'UPDATE':
      return {
        ...state,
        list: state.list.map((todo) =>
          action.todo.id === todo.id
            ? {
                ...todo,
                title: action.todo.title,
              }
            : todo
        ),
      }

    case 'TOGGLE':
      return {
        ...state,
        list: state.list.map((todo) =>
          action.todo.id === todo.id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        ),
      }

    default:
      return state
  }
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

export { StateProvider }
