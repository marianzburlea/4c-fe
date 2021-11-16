import { ReactNode } from 'react'

export interface Flex {
  children?: ReactNode
  gap?: number
  grow?: number
  direction?: 'column' | 'row'
  padding?: number | string
  bgc?: 'red' | 'blue' | 'yellow' | 'transparent'
}
