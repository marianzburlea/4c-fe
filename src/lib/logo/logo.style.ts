import styled from 'styled-components'

import * as T from './logo.type'

export const Logo = styled.div<T.Logo>`
  width: ${({ width }: T.Logo) => width}px;
  height: ${({ height }: T.Logo) => height}px;
  background-image: url('${({ src }: T.Logo) => src}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`
