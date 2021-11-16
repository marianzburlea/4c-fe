import { MouseEventHandler, ReactNode } from 'react'

// onClick?: MouseEventHandler<HTMLDivElement> & ((id: number | Event) => void)
export interface Item {
  onClick?: (timestamp: number) => void
  children?: ReactNode
  itemId?: number
  key?: number | string
  completed?: boolean
  fullWidth?: boolean
}
