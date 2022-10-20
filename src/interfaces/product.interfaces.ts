import { products } from './../data/products'
import { Props as ProductButtonsProps } from '../components/ProductCard/ProductButtons'
import { Props as ProductCardProps } from '../components/ProductCard/ProductCard'
import { Props as ProductImageProps } from '../components/ProductCard/ProductImage'
import { Props as ProductTitleProps } from '../components/ProductCard/ProductTitle'

export interface Product {
  id: string
  img?: string
  title: string
}

export interface ProductContextProps {
  counter: number
  maxCount?: number
  product: Product
  increaseBy: (value: number) => void
}

export interface ProductCardHOCProps {
  ({ children, product, className }: ProductCardProps): JSX.Element
  // Title: ({ title }: { title?: string, className?: string }) => JSX.Element
  // Title: (Props: { title?: string; className?: string }) => JSX.Element
  Title: (Props: ProductTitleProps) => JSX.Element
  // Image: ({ img }: { img?: string }) => JSX.Element
  // Image: (Props: { img?: string; className?: string }) => JSX.Element
  Image: (Props: ProductImageProps) => JSX.Element

  // Buttons: ({ className }: { className?: string }) => JSX.Element
  // Buttons: (Props: { className?: string }) => JSX.Element
  Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
  product: Product
  count: number
}

export interface ProductInCart extends Product {
  count: number
}

export interface InitialValues {
  count?: number
  maxCount?: number
}

export interface ProductCardHandlers {
  count: number
  isMaxCountReached: boolean
  maxCount?: number
  product: Product
  increaseBy: (value: number) => void
  reset: () => void
}
