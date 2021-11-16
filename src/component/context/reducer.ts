import * as T from './type'
import * as C from './constant'

export const todoReducer = (state: T.AppData, action: any) => {
  console.log(action)
  switch (action.type) {
    case C.ADD:
      return {
        ...state,
        list: [...state.list, action.todo],
      }

    case C.REMOVE:
      return {
        ...state,
        list: state.list.filter(({ timestamp }) => action.todo.timestamp !== timestamp),
      }

    case C.UPDATE:
      return {
        ...state,
        list: state.list.map((todo) =>
          action.todo.timestamp === todo.timestamp
            ? {
                ...todo,
                title: action.todo.title,
              }
            : todo
        ),
      }

    case C.TOGGLE:
      return {
        ...state,
        list: state.list.map((todo) =>
          action.todo.timestamp === todo.timestamp
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
