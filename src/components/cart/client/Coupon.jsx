export const Coupon = () => {
    return (
      <>
        <div className="flex flex-col lg:flex-row gap-3 items-center justify-between">
          <form className="flex gap-3">
            <input
              type="text"
              name="voucher"
              id="voucher"
              placeholder="Coupon code"
              className="border border-zinc-400 py-2 px-3 focus:outline-amber-900 focus:outiline-double"
            />
  
            <button
              type="button"
              name="submitVoucher"
              id="submitVoucher"
              className="border-2 border-black bg-transparent transition-colors hover:bg-amber-400 hover:text-white py-2 px-3 lg:px-8"
            >
              Apply coupon
            </button>
          </form>
  
          <div className="flex items-end justify-end">
            <a
              href="/cart"
              title="Update Cart"
              className="border bg-zinc-400 text-white text-center lg:text-xl p-4 transition-colors hover:bg-amber-400 cursor-pointer "
            >
              Update Cart
            </a>
          </div>
        </div>
      </>
    );
  };