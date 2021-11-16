import * as T from './logo.type'
import * as S from './logo.style'

const Logo = ({ src, alt, width, height, dataTestid }: T.Logo) => {
  return (
    <S.Logo
      data-testid={dataTestid}
      alt={alt}
      src={src}
      width={width}
      height={height}
    />
  )
}

Logo.defaultProps = {
  bgUrl: '',
  width: 16,
  height: 16,
  alt: 'change-me',
  dataTestid: 'logo-test-component',
}

export default Logo
