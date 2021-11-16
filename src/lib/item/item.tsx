import * as T from './item.type'
import * as S from './item.style'

const Item = ({ children }: T.Item) => {
  return <S.Item>{children}</S.Item>
}

export default Item
