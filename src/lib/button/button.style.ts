import styled from 'styled-components'

import * as T from './button.type'
const bgcMap = {
  yellow: '#E6D722',
  red: '#DA2E2E',
  blue: '#3D7EE8',
  transparent: 'transparent',
}

export const Button = styled.button`
  transition: 250ms;
  border: 5px solid transparent;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 250ms;
  border-radius: ${({ theme }) => theme.borderRadius};
  gap: ${({ gap }: T.Button) => gap}px;
  display: flex;
  padding: ${({ padding }: T.Button) => padding}px;
  background-color: ${({ bgc = 'transparent' }: T.Button) => bgcMap[bgc]};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    transform: scale(1.05);
    border-color: rgba(61, 126, 232, 0.6);
    box-shadow: 2px 4px 7px rgba(126, 126, 126, 0.6);
  }
`
