import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from '../components'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export function ShoppingPage() {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard key={product.id} product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="coffee's jose" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard key={product.id + 1} product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}
