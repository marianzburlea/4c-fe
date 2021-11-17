import React from "react";
import { ThemeProvider } from 'styled-components'

import { ToDoProvider } from './component/context'
import TodoList from './component/todo-list'
import { Layout } from './lib'
import theme from './config/theme'

const App = () => (
  <ToDoProvider>
    <ThemeProvider theme={theme}>
      <Layout>
        <TodoList />
      </Layout>
    </ThemeProvider>
  </ToDoProvider>
)

export default App;
