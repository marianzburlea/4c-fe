export interface ToDo {
  title: string
  completed?: boolean
  timestamp?: number
}

export const getCurrentTime = () => +new Date()

export const filterComplete = (list: ToDo[], showComplete: boolean) =>
  ((Array.isArray(list) && list) || [])
    .filter(({ completed }) => showComplete === completed)
    .sort((a, b) => (a?.timestamp || 0) - (b?.timestamp || 0))
