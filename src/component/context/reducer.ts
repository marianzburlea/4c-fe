import * as T from './type'
import * as C from './constant'


export const appData: T.AppData = {
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

export const todoReducer = (state: T.AppData = appData, action: any) => {
  switch (action.type) {
    case C.ADD:
      return {
        ...state,
        list: [...state.list, action.todo],
      }

    case C.REMOVE:
      return {
        ...state,
        list: state.list.filter(
          ({ timestamp }) => action.todo.timestamp !== timestamp
        ),
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
