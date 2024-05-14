import { cartContext } from '@/contexts';
import { useContext } from 'react';
import { CartLineItem } from './CartLineItem';
import React from 'react';

export const CartDisplay = () => {
  const { cartProducts, loading, removeFromCart } = useContext(cartContext);

  const Spinner = () => (
    <div className="flex justify-center items-center h-screen">
      <p className="loader"></p>
    </div>
  );

  //insert loder style as homework

  if (loading) {
    // please add spinner
    return (
      <>
        <Spinner></Spinner>
      </>
    );
  }
  const handleRemoveFromCart = (product) => {
    removeFromCart(product.productId);
  };

  return (
    <table>
      <thead className="border-b p-3 h-12">
        <tr className="uppercase text-gray-400">
          <th></th>
          <th className="font-normal px-2 ">Products</th>
          <th className="font-normal px-2">Price</th>
          <th className="font-normal px-2">Quantity</th>
          <th className="font-normal px-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {cartProducts.map((cartProduct) => {
          return (
            <CartLineItem
              key={cartProduct.productId}
              product={cartProduct}
              removeFromCart={handleRemoveFromCart}
            ></CartLineItem>
          );
        })}
      </tbody>{' '}
    </table>
  );
};