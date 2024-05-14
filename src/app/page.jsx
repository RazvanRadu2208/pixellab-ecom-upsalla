import { CartControls } from '@/components/cart/client';
import {
  GridControls,
  Pagination,
  ProductGrid,
  ProductsPerPage,
} from '@/components/catalog/client';

export default function Home() {
  return (
    <div className="container mx-auto px-4 h-full mt-10">
      <header className="flex justify-end">
        <GridControls></GridControls>
        <CartControls></CartControls>
      </header>

      <section className="h-full">
        <ProductsPerPage></ProductsPerPage>

        <ProductGrid></ProductGrid>

        <Pagination></Pagination>
      </section>

      <section></section>
    </div>
  );
}