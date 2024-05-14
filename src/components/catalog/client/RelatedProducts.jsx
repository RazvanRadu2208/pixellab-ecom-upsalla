import { useRelatedProducts } from '@/hooks';
import { ProductTile } from './ProductTile';

export const RelatedProducts = ({ category }) => {
  const { products, loading } = useRelatedProducts(category);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (products.length === 0) {
    return <p>There are no related products.</p>;
  }

  return (
    <ul className="grid grid-cols-3">
      {products.slice(0, 3).map((product) => (
        <li key={product.id}>
          <ProductTile product={product}></ProductTile>
        </li>
      ))}
    </ul>
  );
};