import { getProducts } from '../data/getProducts'
import { useShoppingCart } from '../hooks/useShoppingCart'
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle
} from '../components'

import '../styles/custom-styles.css'

export function ShoppingPage() {
  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {getProducts.map((prod) => (
          <ProductCard
            key={prod.id}
            className='bg-dark text-white'
            product={prod}
            value={shoppingCart[prod.id]?.count || 0}
            onChange={onProductCountChange}
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>

      <div className='shopping-card'>
        {Object.entries(shoppingCart).map(([key, prod]) => (
          <ProductCard
            key={key}
            className='bg-dark text-white'
            product={prod}
            style={{ width: '100px' }}
            value={prod.count}
            onChange={onProductCountChange}
          >
            <ProductImage className='custom-image' />
            <ProductButtons
              className='custom-buttons'
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
