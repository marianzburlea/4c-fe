import { getCurrentTime } from '../../util'
import * as C from './constant'

export const addAction = (title: string) => ({
  type: C.ADD,
  todo: { timestamp: getCurrentTime(), title, completed: false },
})

export const removeAction = (timestamp: number) => ({
  type: C.REMOVE,
  todo: { timestamp },
})

export const toggleAction = (timestamp: number) => ({
  type: C.TOGGLE,
  todo: { timestamp },
})

export const updateAction = (timestamp: number, title: string) => ({
  type: C.TOGGLE,
  todo: { timestamp, title },
})
