import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Rating, Typography } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import { CarsContext } from "../../MainLayout/MainLayout";

function CarDetails() {
  const { carID, brandName } = useParams();
  const { fetchCarsData, carsData } = useContext(CarsContext);

  const filteredData = carsData.find((car) => car._id === carID);
  console.log(filteredData);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleAddToCart = () => {
    Swal.fire({
      icon: "success",
      title: "Car added to cart",
      text: "The car has been added to the cart.",
      showConfirmButton: true,
    });
  };

  return (
    <div>
      <div className="py-10 pt-[50px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div data-aos="zoom-in" className="w-full md:w-1/2">
              <img
                src={filteredData?.image}
                alt="Product Image"
                className="w-full rounded-lg"
              />
            </div>
            <div data-aos="zoom-in" className="w-full p-8 md:w-1/2">
              <h2 className="text-3xl italic font-semibold">
                {filteredData?.name}
              </h2>
              <p className="text-xl font-bold text-[#d54242]">
                Price : $ {filteredData?.price}
              </p>

              <p className="mt-4 text-gray-700">
                <strong>Brand Name:</strong> {filteredData?.brand}
              </p>
              <p className="text-gray-700">
                <strong>Type Name:</strong> {filteredData?.type}
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Product Details</h3>
                <p className="mt-4 text-gray-700">
                  {filteredData?.shortDescription?.length > 330
                    ? filteredData?.shortDescription?.slice(0, 330)
                    : filteredData?.shortDescription}
                  ...
                </p>
              </div>
              <div className="mt-8">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Typography component="legend" className="">
                    <p className="text-gray-600 text-xl font-medium">Rating</p>
                  </Typography>
                  <Rating
                    name="simple-controlled"
                    value={+filteredData?.ratingvalue}
                  />
                </Box>
              </div>
              <button
                className="mt-8 bg-[#d54242] hover-bg-[#FF6347] text-white py-2 px-4 rounded-lg"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
