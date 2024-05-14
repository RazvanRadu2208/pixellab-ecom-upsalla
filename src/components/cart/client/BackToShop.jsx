import { VscArrowSmallLeft } from 'react-icons/vsc';

export const BackToShop = () => {
  return (
    <div>
      <a
        href="/"
        title="Back to Shop"
        className="flex items-center text-black text-center lg:text-xl p-7 transition-color border border-zinc-200 hover:bg-amber-400 hover:text-white cursor-pointer hover:border-amber-400"
      >
        <span className="pr-2 lg:pr-4">
          <VscArrowSmallLeft />
        </span>
        <span className="uppercase">Back To Shop</span>
      </a>
    </div>
  );
};