export interface ToDo {
  title: string
  completed?: boolean
  id?: number
}

export interface FormExtra {
  resetForm: () => void
}

export interface TodoList {
  list?: ToDo[]
}
