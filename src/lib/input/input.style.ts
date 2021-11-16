import styled from 'styled-components'

import * as T from './input.type'

export const Input = styled.input`
  border: 1px solid blue;
  transition: 250ms;
  border: 5px solid transparent;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 250ms;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 2px 4px 7px rgba(126, 126, 126, 0.6);

  &:hover,
  &:focus {
    border-color: rgba(61, 126, 232, 0.6);
  }
`
