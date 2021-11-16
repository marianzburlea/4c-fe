import * as T from './input.type'
import * as S from './input.style'

const Input = ({ type, ...rest }: T.Input) => {
  return <S.Input autoFocus type={type} {...rest} />
}

export default Input
