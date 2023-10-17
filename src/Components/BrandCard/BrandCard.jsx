import React from "react";

function BrandCard({ item }) {
  const { brandName, brandImage } = item;

  return (
    <div className="block max-w-[18rem] md:max-w-[22rem] lg:max-w-[25rem] mx-auto rounded-lg bg-white shadow-[0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img className="rounded-t-lg" src={brandImage} alt={brandImage} />
      </div>
      <div className="p-6">
        <p className="text-3xl font-semibold text-center text-neutral-600 dark:text-neutral-200">
          {brandName}
        </p>
      </div>
    </div>
  );
}

export default BrandCard;
