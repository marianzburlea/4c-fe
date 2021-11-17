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
  dataTestid?: string
}
