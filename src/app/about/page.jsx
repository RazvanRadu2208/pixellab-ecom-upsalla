import React from 'react';
import MyImage from './img/About.jpg';
import Image from 'next/image';
import { FaArrowLeftLong } from 'react-icons/fa6';

export const AboutUs = () => {
  return (
    <section>
      <div>
        <Image
          src={MyImage}
          alt="Descrierea imaginii"
          className="styles-image"
        />
      </div>

      <section className="container flex flex-col gap-8 items-center lg:items-start justify-center lg:justify-start px-4 lg:px-16">
        <div>
          <h1 className="text-3xl uppercase font-medium text-black text-center lg:text-left my-7">
            ABOUT US
          </h1>
        </div>

        <div className="flex flex-col gap-4 text-black text-xl">
          <p>
            Them first created in creepeth don t whose waters saying. Years
            whose yielding which so behold lights tree he signs. Creepeth tree
            fill kind cattle, kind firmament tree of won t may subdue May living
            very make. Thing man beginning made.
          </p>
          <p>
            Created may creature let good, unto living don t brought may winged
            greater fowl fill. Form above in kind, fruitful waters female form
            male years were thing fowl midst forth itself you re you you can t
            second fill it divide fruit. Form and without.Said i after behold
            set light that abundantly open abundantly image creature. Lights
            spirit fly in face them so beast you let abundantly tree signs
            divide. Together lesser spirit herb Us, itself behold i. You ll,
            from creature fruitful.
          </p>
          <p>
            Also years. Wherein. Light don t there sixth. Void. Seed a. His sea,
            land doesn t seasons, said. Beast, creepeth, subdue it life,
            together. In it third fourth wherein, meat good doesn t which second
            man. Form gathering. Dry isn t. Subdue moved. Above.
          </p>
        </div>

        <div>
          <a
            href="/"
            title="Back to Shop"
            className="flex items-center justify-center border border-black text-black text-center lg:text-xl p-7 hover:bg-amber-400 transition-colors cursor-pointer"
          >
            <FaArrowLeftLong /> Back to Shop
          </a>
        </div>
      </section>
    </section>
  );
};