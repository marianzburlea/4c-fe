import styled from 'styled-components'

import * as T from './item.type'

export const Item = styled.button<T.Item | any>`
  border: 1px solid blue;
  cursor: pointer;
  transition: 250ms;
  text-decoration: ${({ completed }: T.Item) =>
    completed ? 'line-through' : 'none'};

  &:hover {
    transform: scale(1.05);
  }
`
