export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  product: Product
  increaseBy: (value: number) => void
}

export interface ProductCardProps {
  product: Product
  children?: React.ReactElement | React.ReactElement[]
  className?: string
  style?: React.CSSProperties
}

export interface ProductTitleProps {
  className?: string
  title?: string
  style?: React.CSSProperties
}

export interface ProductImageProps {
  className?: string
  img?: string
  style?: React.CSSProperties
}

export interface ProductButtonsProps {
  className?: string
  style?: React.CSSProperties
}

// Props or props destructuring (is the same)
export interface ProductCardHOCProps {
  ({ children, product, className, style }: ProductCardProps): JSX.Element
  Buttons: (Props: ProductButtonsProps) => JSX.Element
  Image: ({ img, className, style }: ProductImageProps) => JSX.Element
  Title: (Props: ProductTitleProps) => JSX.Element
}
