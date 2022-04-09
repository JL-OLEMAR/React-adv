import { useState } from 'react'

import { onChangeArgs, Product } from '../interfaces/interfaces'

interface ProductInCart extends Product {
  count: number
}

export function useShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((prevProd) => {
      const productInCart: ProductInCart = prevProd[product.id] || {
        ...product,
        count: 0
      }

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count

        return {
          ...prevProd,
          [product.id]: productInCart
        }
      }

      // Delete product from mini cart (if count is 0)
      const { [product.id]: _deleteProd, ...rest } = prevProd

      return rest
    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}
