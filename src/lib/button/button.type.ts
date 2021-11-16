import { ReactNode } from 'react'

export interface Button {
  children?: ReactNode
  type: 'submit' | 'button' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
  padding?: number | string
  bgc?: 'red' | 'blue' | 'yellow' | 'transparent'
  gap?: number
  dataTestid?: string
}
