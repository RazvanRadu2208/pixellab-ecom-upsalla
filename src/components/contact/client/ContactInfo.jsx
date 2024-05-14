import React from 'react';

export const ContactInfo = () => {
  return (
    <section className="lg:w-3/6">
      <h1 className="text-3xl uppercase font-medium text-center lg:text-left my-7 text-black">
        Contact Info
      </h1>

      <p className="mb-2 text-black">
        Had land. Days so Kind also. Of beginning night sixth. Man day in.
        Fruitful female called firmament from, make meat multiply to image tree
        midst day don t under open waters.
      </p>

      <div>
        <ul className="flex flex-col items-start justify-center text-black gap-3 lg:justify-start  lg:gap-5">
          <li>
            <span className="font-bold">Address: </span>145 Oliveshka Street,
            Los Angeles, LA 90003
          </li>
          <li>
            <span className="font-bold">Phone: </span>
            <a href="tel:+44 987 065 901">+44 987 065 901</a>
          </li>
          <li>
            <span className="font-bold">Email: </span>
            <a href="mailto:info@Example.com">info@Example.com</a>
          </li>
          <li>
            <span className="font-bold">Fax: </span>
            <a href="tel:++44 987 065 901">+44 987 065 901</a>
          </li>
        </ul>
      </div>
    </section>
  );
};