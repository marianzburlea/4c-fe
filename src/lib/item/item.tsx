import * as T from './item.type'
import * as S from './item.style'

const Item = ({ children, itemId, onClick, completed, fullWidth }: T.Item) => {
  return (
    <S.Item
      onClick={onClick}
      itemId={itemId}
      fullWidth={fullWidth}
      completed={completed}
    >
      {children}
    </S.Item>
  )
}

Item.defaultProps = {
  fullWidth: false,
}

export default Item
