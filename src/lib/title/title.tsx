import * as T from './title.type'
import * as S from './title.style'

const Title = ({ children, tag, dataTestid }: T.Title) => {
  switch (tag) {
    case 'h4':
      return <S.H4 data-testid={dataTestid}>{children}</S.H4>

    default:
      return <S.H1 data-testid={dataTestid}>{children}</S.H1>
  }
}

Title.defaultProps = {
  tag: 'h1',
}

export default Title
