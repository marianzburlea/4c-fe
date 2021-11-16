import * as T from './input.type'
import * as S from './input.style'

const Input = ({
  type,
  error,
  touched,
  dirty,
  placeholder,
  label,
  dataTestid,
  ...rest
}: T.Input) => {
  return (
    <S.Wrapper data-testid={dataTestid}>
      <S.Label
        data-testid={`${dataTestid}-label`}
        htmlFor={`${dataTestid}-input`}
      >
        {label}
      </S.Label>

      <S.Input
        id={`${dataTestid}-input`}
        data-testid={`${dataTestid}-input`}
        autoFocus
        placeholder={placeholder}
        type={type}
        {...rest}
      />

      <S.Error
        data-testid={`${dataTestid}-error`}
        show={!!error && touched && dirty}
      >
        {error}
      </S.Error>
    </S.Wrapper>
  )
}

Input.defaultProps = {
  error: '',
  touched: false,
  dataTestid: 'input-test-component',
}

export default Input
