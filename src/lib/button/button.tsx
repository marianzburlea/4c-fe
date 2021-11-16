import * as T from './button.type'
import * as S from './button.style'

const Button = ({
  children,
  type,
  disabled,
  bgc,
  gap,
  padding,
  dataTestid,
}: T.Button) => {
  return (
    <S.Button
      type={type}
      disabled={disabled}
      data-testid={dataTestid}
      bgc={bgc}
      gap={gap}
      padding={padding}
    >
      {children}
    </S.Button>
  )
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
}

export default Button
