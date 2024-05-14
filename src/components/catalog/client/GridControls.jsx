import { uiContext } from '@/context';
import { useContext } from 'react';
import { TfiViewGrid } from 'react-icons/tfi';
import { TfiLayoutColumn2 } from 'react-icons/tfi';
import { TfiLayoutWidthFull } from 'react-icons/tfi';

const buttonClasses =
  'flex justify-center items-center border-l border-zinc-200 w-20 hover:text-white h-20 transition-colors hover:bg-neutral-900';

export const GridControls = () => {
  const { itemsPerRow, setItemsPerRow } = useContext(uiContext);

  return (
    <ul className="border border-zinc-200 hidden lg:flex">
      <li>
        <button
          type="button"
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '1' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('1');
          }}
        >
          <TfiLayoutWidthFull></TfiLayoutWidthFull>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Two per row"
          className={`${buttonClasses} ${
            itemsPerRow === '2' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('2');
          }}
        >
          <TfiLayoutColumn2></TfiLayoutColumn2>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Four per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4');
          }}
        >
          <TfiViewGrid></TfiViewGrid>
        </button>
      </li>
    </ul>
  );
};