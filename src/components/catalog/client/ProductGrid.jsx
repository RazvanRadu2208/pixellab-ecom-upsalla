import { ProductTile } from '.';
import { css } from '@emotion/css';
import { useProducts } from '../../../hooks';
import { useContext, useEffect, useState } from 'react';
import { uiContext } from '@/contexts';

const Spinner = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="loader"></p>
  </div>
);

export const ProductGrid = () => {
  const { itemsPerRow, pagination } = useContext(uiContext);
  const { perPage, page } = pagination;
  const { products, loading, error } = useProducts();
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  useEffect(() => {
    const newPaginatedProducts = products
      .slice()
      .splice(perPage * (page - 1), perPage);

    setPaginatedProducts(newPaginatedProducts);
  }, [products, perPage, page]);

  const gridCssClass = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      column-gap: 32px;
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
    }
  `;

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (error.trim().length > 0) {
    return (
      <div className="container mx-auto px-4">
        {' '}
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <>
      <ul className={gridCssClass}>
        {paginatedProducts.map((product) => {
          const { id } = product;

          return (
            <li key={id} className="flex opacity-100">
              <ProductTile product={product}></ProductTile>
            </li>
          );
        })}
      </ul>
    </>
  );
};