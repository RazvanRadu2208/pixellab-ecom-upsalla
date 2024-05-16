import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RatingStar from '@/components/common/rating/RatingStar';
import { AddToCart } from '@/components/cart/client';

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id, rating } = product;
  const { rate } = rating;

  const productUrl = `/products/${id}`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-center w-full flex flex-col justify-between gap-4">
      <header>
        <Link href={productUrl} title={title}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline place-items-center"
          >
            <Image
              width={200}
              height={200}
              src={imageUrl}
              alt={`Image for product ${title}`}
              objectFit="contain"
              className={`inline transition-transform ${
                isHovered ? 'scale-105' : ''
              }`}
              layout="response"
            />
          </div>
        </Link>
      </header>

      <section className="mt-8 text-center text-sm flex flex-col items-center gap-4">
        <h1 className="uppercase text-zinc-400 mb-2">
          <Link href={productUrl} title={title}>
            {title}
          </Link>
        </h1>

        <div>
          <RatingStar rating={rate}></RatingStar>
        </div>

        <div>Price: ${price}</div>

        <footer>
          <AddToCart product={product}></AddToCart>
        </footer>
      </section>
    </div>
  );
};