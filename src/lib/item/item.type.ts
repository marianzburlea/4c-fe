import { MouseEventHandler, ReactNode } from 'react'

// onClick?: MouseEventHandler<HTMLDivElement> & ((id: number | Event) => void)
export interface Item {
  onClick?: (id: number) => void
  children?: ReactNode
  itemId?: number
  key?: number | string
  completed?: boolean
}
