import { createContext } from 'react'

import { useProduct } from '../hooks/useProduct'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'

// Here, create a context that will be used by ProductCard.
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

// Component Main ProductCard, and Provider to the children
export function ProductCard({ children, product }: ProductCardProps) {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  )
}
