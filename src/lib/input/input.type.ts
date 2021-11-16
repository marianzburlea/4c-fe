export interface Input {
  type?: 'text' | 'checkbox'
  error?: string
  touched?: boolean
}

export interface SError {
  show?: boolean
}
