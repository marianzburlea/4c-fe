import styled from 'styled-components'

import * as T from './flex.type'

const bgcMap = {
  yellow: '#E6D722',
  red: '#DA2E2E',
  blue: '#3D7EE8',
  transparent: 'transparent',
}

export const Flex = styled.div<T.Flex>`
  justify-content: center;
  align-items: center;
  gap: ${({ gap }: T.Flex) => gap}px;
  display: flex;
  flex-direction: ${({ direction }: T.Flex) => direction};
  flex-grow: ${({ grow }: T.Flex) => grow};
  padding: ${({ padding }: T.Flex) => padding}px;
  background-color: ${({ bgc = 'transparent' }: T.Flex) => bgcMap[bgc]};
  border-radius: ${({ theme }) => theme.borderRadius};
`
