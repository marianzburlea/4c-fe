import React from "react";
import { StateProvider } from './component/context'
import TodoList from './component/todo-list'
import { Layout } from './lib'

const App = () => (
  <StateProvider>
    <Layout>
      <TodoList />
    </Layout>
  </StateProvider>
)

export default App;
