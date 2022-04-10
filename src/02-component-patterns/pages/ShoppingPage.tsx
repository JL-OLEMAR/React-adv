import { getProducts } from '../data/getProducts'
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle
} from '../components'

import '../styles/custom-styles.css'

const product = getProducts[0]

export function ShoppingPage() {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        className='bg-dark text-white'
        initialValues={{ count: 4, maxCount: 10 }}
        product={product}
      >
        {({
          product,
          count,
          isMaxCountReached,
          maxCount,
          increaseBy,
          reset
        }) => (
          <>
            <ProductImage className='custom-image' />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
            {/* Receives for arguments */}
            <br />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}> -2 </button>
            {!isMaxCountReached ? (
              <button onClick={() => increaseBy(2)}> +2 </button>
            ) : (
              <span style={{ color: '#f00', backgroundColor: 'gold' }}>
                {' '}
                Sold out
              </span>
            )}
            {/* ↓ line 21 ↓ */}
            <p>{`count: ${count ? count : 'No value initial'}`}</p>{' '}
            <p>{`maxCount: ${maxCount ? maxCount : 'No Value Max'}`}</p>
            <p>{`isMaxCountReached: ${isMaxCountReached}`}</p>
          </>
        )}
      </ProductCard>
    </div>
  )
}
