import { BackToShop, CartControls } from '@/components/cart/client';
import { redirect } from 'next/dist/server/api-utils';

const getProduct = async (productId) => {
  return fetch(`${baseUrl}/products/${productId}`)
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      redirect('/not-found');
    });
};

export default async function ProductPage({ params }) {
  const productId = params.pid;
  const product = await getProduct(productId);

  return (
    <div className="container px-4 mx-auto">
      <header className="flex justify-between">
        <BackToShop></BackToShop>

        <CartControls></CartControls>
      </header>

      <section>product: {productId}</section>
      <section>{JSON.stringify(product)}</section>
    </div>
  );
}