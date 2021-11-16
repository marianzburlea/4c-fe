import * as T from './button.type'
import * as S from './button.style'

const Button = ({ children, type, disabled }: T.Button) => {
  return (
    <S.Button type={type} disabled={disabled}>
      {children}
    </S.Button>
  )
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
}

export default Button
