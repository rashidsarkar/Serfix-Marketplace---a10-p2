import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Box, Rating, Typography } from "@mui/material";
import Swal from "sweetalert2";

function CarDetails() {
  const carDetails = useParams();
  console.log(carDetails);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const product = {
    name: "Product Name",
    price: "$999.99",
    short_description: "Product short description goes here.",
    long_description: "Product long description goes here.",
    brand: "Brand Name",
    type: "Type Name",
    rating: 4,
  };

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
                src={`https://i.ibb.co/JddJCCC/pexels-ambady-kolazhikkaran-14061321.jpg`}
                alt="Product Image"
                className="w-full rounded-lg"
              />
            </div>
            <div data-aos="zoom-in" className="w-full p-8 md:w-1/2">
              <h2 className="text-3xl font-semibold">{product.name}</h2>
              <p className="text-xl font-bold text-pink-600">{product.price}</p>
              <p className="mt-4 text-gray-700">{product.short_description}</p>
              <p className="mt-4 text-gray-700">
                <strong>Brand Name:</strong> {product.brand}
              </p>
              <p className="text-gray-700">
                <strong>Type Name:</strong> {product.type}
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Product Details</h3>
                <p className="mt-4 text-gray-700">{product.long_description}</p>
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
                  <Rating name="simple-controlled" value={product.rating} />
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
