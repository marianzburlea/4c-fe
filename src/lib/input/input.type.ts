export interface Input {
  type?: 'text' | 'checkbox'
  error?: string
  placeholder?: string
  label?: string
  touched?: boolean
  dirty?: boolean
  dataTestid?: string
}

export interface SError {
  show?: boolean
}
