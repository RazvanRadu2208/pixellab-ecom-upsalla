import { BackToShop, CartControls } from '@/components/cart/client';
import { baseUrl } from '@/index';
import { redirect } from 'next/navigation';

const fetchProduct = async (productId) => {
  try {
    const res = await fetch(`${baseUrl}/products/${productId}`);

    console.log('Response status:', res.status);
    console.log('Response headers:', res.headers);

    if (!res.ok) {
      console.error(`Fetch error: ${res.statusText}`);
      redirect('/not-found');
      return;
    }

    const text = await res.text();
    console.log('Response body:', text);

    if (!text) {
      console.error('Empty response body');
      console.log(res.body);
      redirect('/not-found');
      return;
    }

    const product = JSON.parse(text);
    return product;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    redirect('/not-found');
  }
};

const ProductPage = async ({ params }) => {
  const productId = params.pid;
  const product = await fetchProduct(productId);

  if (!product) {
    // This should theoretically never be hit because of the redirects above
    return null;
  }

  return (
    <div className="container px-4 mx-auto">
      <header className="flex justify-between">
        <BackToShop></BackToShop>
        <CartControls></CartControls>
      </header>

      <section>Product: {productId}</section>
      <section>{JSON.stringify(product)}</section>
    </div>
  );
};

export default ProductPage;
