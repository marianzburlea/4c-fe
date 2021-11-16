import React from "react";
import { StateProvider } from './component/context'
import TodoList from './component/todo-list'

const App = () => (
  <StateProvider>
    <TodoList />
  </StateProvider>
)

export default App;
