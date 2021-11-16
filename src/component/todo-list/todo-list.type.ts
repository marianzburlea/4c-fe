export interface ToDo {
  title: string
  completed?: boolean
  id?: number
}

export interface TodoList {
  list?: ToDo[]
}
