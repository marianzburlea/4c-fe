import styled, { css } from 'styled-components'

// import * as T from './aaaa.type'
const commonTitle = css`
  font-weight: 400;
  padding: 1rem;
`

export const H1 = styled.h1`
  ${commonTitle}

  color: ${({ theme }) => theme.color.black};
`
export const H4 = styled.h4`
  ${commonTitle}

  color: ${({ theme }) => theme.color.primary};
`
