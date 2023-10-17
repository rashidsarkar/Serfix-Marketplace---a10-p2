import React from "react";

function SectionTitle({ title }) {
  return (
    <h2 className="text-center my-12 relative mb-10 text-4xl font-normal leading-10 text-[#252d41] uppercase before:bg-[#d54242] before:bottom-[-10px] before:h-[4px] before:rounded-lg before:left-[50%] before:absolute before:translate-x-[-50%] before:w-[70%] ">
      {title}
    </h2>
  );
}

export default SectionTitle;
