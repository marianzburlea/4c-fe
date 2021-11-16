import * as T from './input.type'
import * as S from './input.style'

const Input = ({ type, error, touched, ...rest }: T.Input) => {
  return (
    <S.Wrapper>
      <S.Input autoFocus type={type} {...rest} />

      <S.Error show={!!error && touched}>{error}</S.Error>
    </S.Wrapper>
  )
}

Input.defaultProps = {
  error: '',
  touched: false,
}

export default Input
