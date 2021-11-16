import { getRandomId } from '../../util'
import * as C from './constant'

export const addAction = (title: string) => ({
  type: C.ADD,
  todo: { id: getRandomId(), title, completed: false },
})

export const removeAction = (id: number) => ({
  type: C.REMOVE,
  todo: { id },
})

export const toggleAction = (id: number) => ({
  type: C.TOGGLE,
  todo: { id },
})

export const updateAction = (id: number, title: string) => ({
  type: C.TOGGLE,
  todo: { id, title },
})
