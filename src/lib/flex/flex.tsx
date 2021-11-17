import * as T from './flex.type'
import * as S from './flex.style'

const Flex = ({
  children,
  direction,
  gap,
  padding,
  bgc,
  grow,
  dataTestid,
}: T.Flex) => {
  return (
    <S.Flex
      direction={direction}
      gap={gap}
      grow={grow}
      padding={padding}
      data-testid={dataTestid}
      bgc={bgc}
    >
      {children}
    </S.Flex>
  )
}

Flex.defaultProps = {
  direction: 'row',
  padding: 0,
  gap: 0,
  grow: 0,
}

export default Flex
