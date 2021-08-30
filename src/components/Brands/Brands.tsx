/* eslint-disable @next/next/no-img-element */
import React from "react";

const Brands = [
  { alt: "Levell", img: "/imgs/customers/levell.png" },
  { alt: "Royal Bank of Scotland", img: "/imgs/customers/rbs.svg" },
  { alt: "Lloyds", img: "/imgs/customers/lloyds.svg" },
  { alt: "Financial Software Limited", img: "/imgs/customers/fsl@2x.png" },
  { alt: "Foodie.St", img: "/imgs/customers/foodiest@2x.png" },
];

const BrandSection = () => (
  <section className="fdb-block thin bg-dark">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col">
          {Brands.map(({ alt, img }) => (
            <img
              key={alt}
              alt={alt}
              height="44"
              className="ml-3 mr-3 mb-2 mt-2"
              src={img}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BrandSection;
