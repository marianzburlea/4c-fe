import * as T from './flex.type'
import * as S from './flex.style'

const Flex = ({ children, direction, gap, padding, bgc }: T.Flex) => {
  return (
    <S.Flex direction={direction} gap={gap} padding={padding} bgc={bgc}>
      {children}
    </S.Flex>
  )
}

Flex.defaultProps = {
  direction: 'row',
  padding: 0,
  gap: 0,
}

export default Flex
