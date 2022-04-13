import { getProducts } from '../data/getProducts'
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle
} from '../components'

const product = getProducts[0]

export function ShoppingPage() {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard initialValues={{ count: 4, maxCount: 10 }} product={product}>
        {({
          product,
          count,
          isMaxCountReached,
          maxCount,
          increaseBy,
          reset
        }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  )
}
