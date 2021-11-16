import { ReactNode } from 'react'

export interface Button {
  children?: ReactNode
  type: 'submit' | 'button' | 'reset'
  disabled?: boolean
}
