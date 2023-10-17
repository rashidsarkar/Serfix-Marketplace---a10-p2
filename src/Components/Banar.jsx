import React from "react"; // Import React if not already imported
import { Link } from "react-router-dom";

function Banar() {
  return (
    <div className="relative">
      {/* Image */}
      <img
        src="https://i.ibb.co/MfHwY3H/pexels-lloyd-freeman-1429775-1.jpg"
        alt="Your Dream Car"
        className="w-full md:h-[750px]"
      />

      {/* Overlay on the Image */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="text-2xl  md:text-6xl lg:text-7xl font-bold">
            FIND YOUR DREAM CAR
          </h1>
          <p className="text-lg md:text-xl">
            Discover the perfect car for your needs.
          </p>

          {/* Call to Action Button */}
          <Link
            // Replace with the actual URL you want to link to
            className="mt-4 inline-block px-4 py-2 bg-[#d54242] text-white text-lg font-semibold rounded hover:bg-[#d54242] transition duration-300"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banar;
