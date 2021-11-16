export interface ToDo {
  title: string
  completed?: boolean
  timestamp: number
}

export interface AppData {
  list: ToDo[]
}
