'use client';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function AboutUs() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimationData = async () => {
      const response = await fetch('/animations/about-us.json');
      const data = await response.json();
      setAnimationData(data);
    };

    loadAnimationData();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <section className="container mx-auto flex flex-col items-center justify-between gap-10">
      <div className="w-full flex justify-center ">
        <Lottie options={defaultOptions} className="w-full" />
      </div>

      <h1 className="lg:text-3xl text-2xl font-semibold">
        About us
      </h1>

      <div className="w-2/3 lg:text-xl text-base flex flex-col gap-8 pb-8">
        <p>
        Them first created in creepeth don{"'"}t whose waters saying. Years
            whose yielding which so behold lights tree he signs. Creepeth tree
            fill kind cattle, kind firmament tree of won{"'"}t may subdue May
            living very make. Thing man beginning made.
        </p>
        <hr />
        <p>
        Created may creature let good, unto living don{"'"}t brought may
            winged greater fowl fill. Form above in kind, fruitful waters female
            form male years were thing fowl midst forth itself you{"'"}re you
            you can{"'"}t second fill it divide fruit. Form and without.Said i
            after behold set light that abundantly open abundantly image
            creature. Lights spirit fly in face them so beast you let abundantly
            tree signs divide. Together lesser spirit herb Us, itself behold i.
            You{"'"}ll, from creature fruitful.
        </p>
        <hr />
        <p>
        Also years. Wherein. Light don{"'"}t there sixth. Void. Seed a. His
            sea, land doesn{"'"}t seasons, said. Beast, creepeth, subdue it
            life, together. In it third fourth wherein, meat good doesn{"'"}t
            which second man. Form gathering. Dry isn{"'"}t. Subdue moved.
            Above.
        </p>
        <hr />

        <a
            href="/"
            title="Back to Shop"
            className="flex items-center justify-center border border-black text-black text-center lg:text-xl p-7 hover:bg-amber-400 transition-colors cursor-pointer"
          >
            <FaArrowLeftLong /> Back to Shop
          </a>
      </div>
    </section>
  );
}