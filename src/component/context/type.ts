export interface ToDo {
  title: string
  completed?: boolean
  id: number
}

export interface AppData {
  list: ToDo[]
}
