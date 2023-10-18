import { Box, Rating, Typography } from "@mui/material";
import React, { useState } from "react";

function AddProduct() {
  const [Ratingvalue, setRatingvalue] = useState(2);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    // Extract values from the form data
    const image = form.get("image");
    const name = form.get("name");
    const brand = form.get("brand");
    const type = form.get("type");
    const price = form.get("price");
    const shortDescription = form.get("shortDescription");
    // Get the count of checked rating stars

    // Create an object with the form data
    const productData = {
      image,
      name,
      brand,
      type,
      price,
      shortDescription,
      Ratingvalue,
    };
    // console.log(rating);

    // You can do something with the productData, like sending it to a server
    console.log("Form Data Submitted:", productData);

    // Reset the form fields
    e.currentTarget.reset();
  };
  return (
    <div className="mx-auto max-w-lg mt-6 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Image:</label>
          <input
            type="text"
            name="image"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Name:</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Brand Name:</label>
          <select
            name="brand"
            className="w-full border border-gray-300 rounded p-2 select select-bordered"
          >
            <option value="Toyota">Toyota</option>
            <option value="Ford">Ford</option>
            <option value="Honda">Honda</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Nissan">Nissan</option>
            {/* Add more brand options here */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Type Name:</label>
          <select
            name="type"
            className="w-full border border-gray-300 rounded p-2 select select-bordered"
          >
            <option value="Hybrid">Hybrid</option>
            <option value="SportsCar">Sports Car</option>
            <option value="OffRoad">Off-Road</option>
            <option value="Sedan">Sedan</option>
            {/* Add more type options here */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Price:</label>
          <input
            type="text"
            name="price"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Short Description:</label>
          <textarea
            name="shortDescription"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4 mx-auto text-center">
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend">Rating</Typography>
            <Rating
              name="simple-controlled"
              value={Ratingvalue}
              onChange={(event, newValue) => {
                setRatingvalue(newValue);
              }}
            />
          </Box>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#d54242] text-white py-2 px-4 rounded hover:bg-[#FF6347]"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
