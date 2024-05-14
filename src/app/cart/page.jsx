import {
    CartControls,
    BackToShop,
    CartTotals,
    CartDisplay,
    Coupon,
  } from '@/components/cart/client';
  
  export default function CartPage() {
    return (
      <div className="container px-4 lg:px-0 mx-auto mb-12">
        <header className="flex justify-between">
          <BackToShop></BackToShop>
  
          <CartControls></CartControls>
        </header>
  
        <section className="mt-16 grid lg:grid-cols-12 gap-6">
          <div className="col-span-8">
            <CartDisplay></CartDisplay>
            <Coupon></Coupon>
          </div>
  
          <aside className="lg:col-span-4">
            <CartTotals></CartTotals>
  
            <div className="flex">
              <button
                type="button"
                title="Proceed to Checkout"
                className="bg-black text-white transition-colors hover:bg-amber-400 uppercase text-center w-full py-4"
              >
                Proceed to Checkout
              </button>
            </div>
          </aside>
        </section>
      </div>
    );
  }