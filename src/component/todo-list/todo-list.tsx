import { todoList } from './todo-list.data'
import * as T from './todo-list.type'

const TodoList = ({ data }: T.TodoList) => {
  const list = Array.isArray(data) ? data : todoList
  return (
    <div>
      {list.map((item) => (
        <h1>To to list</h1>
      ))}
    </div>
  )
}

export default TodoList
