export interface ToDo {
  title: string
  completed?: boolean
  timestamp?: number
}

export interface FormExtra {
  resetForm: () => void
}

export interface TodoList {
  list: ToDo[]
}

export interface TodoListComponent {
  dataTestid?: string
}
