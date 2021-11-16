import * as T from './layout.type'
import * as S from './layout.style'

const Layout = ({ children }: T.Layout) => {
  return (
    <S.Layout>
      {children}
      <S.Reset />
    </S.Layout>
  )
}

export default Layout
