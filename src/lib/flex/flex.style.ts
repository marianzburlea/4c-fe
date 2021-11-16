import styled from 'styled-components'

import * as T from './flex.type'

export const Flex = styled.div<T.Flex>`
  gap: ${({ gap }: T.Flex) => gap}px;
  display: flex;
  flex-direction: ${({ direction }: T.Flex) => direction};
  padding: ${({ padding }: T.Flex) => padding}px;
`
