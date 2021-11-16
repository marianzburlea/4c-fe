import { ReactNode } from 'react'

export interface Title {
  children?: ReactNode
  tag?: 'h1' | 'h4'
  dataTestid?: string
}
