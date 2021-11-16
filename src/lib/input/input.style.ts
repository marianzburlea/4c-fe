import styled from 'styled-components'

import * as T from './input.type'

export const Wrapper = styled.div`
  position: relative;
  transition: 250ms;
`

export const Label = styled.label`
  position: absolute;
  color: ${({ theme }) => theme.color.primary};
  top: -1.3rem;
  font-size: 14px;
  padding-left: 1rem;
`

export const Error = styled.div<T.SError>`
  margin-top: 4px;
  margin-left: 14px;
  background-color: #da2e2e;
  color: ${({ theme }) => theme.color.white};
  opacity: ${({ show }) => (show ? 1 : 0)};
  padding: 0.2rem 0.4rem;
  font-size: 14px;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: absolute;
  transition: 250ms;
  width: 10rem;
  min-height: 1rem;
  box-shadow: 2px 4px 7px rgba(126, 126, 126, 0.6);
`

export const Input = styled.input`
  border: 1px solid blue;
  transition: 250ms;
  border: 5px solid transparent;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 250ms;
  min-width: 20rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 2px 4px 7px rgba(126, 126, 126, 0.6);

  &:hover,
  &:focus {
    border-color: rgba(61, 126, 232, 0.6);
  }
`
