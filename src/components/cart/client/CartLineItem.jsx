import React, { useState } from 'react';
import { useProduct } from '@/hooks';
import Link from 'next/link';
import { IoIosClose } from 'react-icons/io';
import Image from 'next/image';
import RatingStar from '@/components/common/rating/RatingStar';
import { MdDelete } from 'react-icons/md';

export const CartLineItem = ({ product, removeFromCart }) => {
  const { quantity: initialQuantity, productId } = product;
  const { product: fullProduct, loading } = useProduct(productId);
  const [quantity, setQuantity] = useState(initialQuantity);

  const Spinner = () => (
    <div className="flex justify-center items-center h-screen">
      <p className="loader"></p>
    </div>
  );

  if (loading) {
    return (
      <tr>
        <td>
          <Spinner />
        </td>
      </tr>
    );
  }

  if (!fullProduct) {
    return (
      <tr>
        <td></td>
      </tr>
    );
  }

  const { title, price, image, rating } = fullProduct;

  const { rate, count } = rating;

  const handleRemoveFromCart = () => {
    removeFromCart(product.productId);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity,
    );
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <tr className="border-b text-black">
      <td className="center text-black text-2xl">
        <button
          type="button"
          onClick={handleRemoveFromCart}
          title={`Remove ${title} from cart`}
        >
          <IoIosClose size={32}></IoIosClose>
        </button>
      </td>
      <td className="py-4 px-2 flex">
        <Link href={`/products/${productId}`}>
          <Image
            width={90}
            height={90}
            src={image}
            alt={`Image for product ${title}`}
          ></Image>
        </Link>

        <div className="flex flex-col items-start justify-start gap-3">
          <Link className="font-medium" href={`/products/${productId}`}>
            {title}
          </Link>

          <section className="flex items-center justify-center">
            <RatingStar rating={rate}></RatingStar>{' '}
            <div className="flex items-center justify-center">
              <span className="pl-4">{rate}</span>
              <span className="pl-4">({count} Reviews)</span>
            </div>
          </section>
        </div>
      </td>
      <td className="text-center px-2">${price}</td>
      <td className="text-center px-2">
        <div className="border border-black flex items-center justify-center gap-1">
          <button
            onClick={decreaseQuantity}
            aria-label="Decrease quantity"
            className=" p-2"
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={increaseQuantity}
            aria-label="Increase quantity"
            className=" p-2"
          >
            +
          </button>
        </div>
      </td>
      <td className="text-center px-2">{(price * quantity).toFixed(2)}</td>
    </tr>
  );
};