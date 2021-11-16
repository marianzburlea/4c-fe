import * as T from './item.type'
import * as S from './item.style'

const Item = ({ children, itemId, onClick, completed }: T.Item) => {
  return (
    <S.Item onClick={onClick} itemId={itemId} completed={completed}>
      {children}
    </S.Item>
  )
}

export default Item
