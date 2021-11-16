import * as T from './button.type'
import * as S from './button.style'

const Button = ({ children }: T.Button) => {
  return <S.Button>{children}</S.Button>
}

export default Button
