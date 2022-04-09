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
      // Delete product from mini cart (if count is 0)
      if (count === 0) {
        const { [product.id]: _deleteProd, ...rest } = prevProd

        return rest
      }

      return {
        ...prevProd,
        [product.id]: { ...product, count }
      }
    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}
