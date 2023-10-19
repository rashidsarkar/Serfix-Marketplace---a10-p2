import React, { useContext, useState } from "react";
import { Box, Rating, Typography } from "@mui/material";
import axios from "axios";
import swal from "sweetalert";
import { CarsContext } from "../../MainLayout/MainLayout";
import { useParams } from "react-router-dom";

function UpDateProduct() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { fetchCarsData, carsData, fetchItemOnCartData } =
    useContext(CarsContext);
  const filteredDatas = carsData.filter((car) => car._id === id);

  const filteredData = filteredDatas[0];

  const ratingValuesOld = filteredData?.ratingvalue;

  const [ratingvalue, setRatingvalue] = useState(ratingValuesOld);

  const [selectedOption, setSelectedOption] = useState(filteredData?.brand);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  console.log(filteredData);
  console.log("rating Value ", ratingvalue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);

    // Extract values from the form data
    const image = form.get("image");
    const name = form.get("name");
    const brand = form.get("brand");
    const type = form.get("type");
    const price = form.get("price");
    const shortDescription = form.get("shortDescription");

    // Create an object with the updated data
    const updatedProductData = {
      // Include existing data
      image,
      name,
      brand,
      type,
      price,
      shortDescription,
      ratingvalue,
    };

    axios
      .put(
        `http://localhost:5000/cars/${filteredData?._id}`,
        updatedProductData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);

        if (response.data.modifiedCount) {
          // fetchCarsData();
          swal("Success", "Product updated successfully!", "success");
          fetchCarsData();
          fetchItemOnCartData();
        }
      })
      .catch((error) => {
        console.log(error);
        swal("Error", "Failed to update the product.", "error");
      });

    // Reset the form fields
    // e.currentTarget.reset();
  };

  return (
    <div>
      <div className="mx-auto max-w-lg my-6 p-6 bg-[#d54242] rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-white">Update Product</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-200">Name:</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded p-2"
              defaultValue={filteredData?.name}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200">Image:</label>
            <input
              type="text"
              name="image"
              className="w-full border border-gray-300 rounded p-2"
              defaultValue={filteredData?.image}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-200">Brand Name:</label>
            <select
              name="brand"
              className="w-full border border-gray-300 rounded p-2 select select-bordered"
              // defaultValue={brand}
              // onChange={handleSelectChange}
              // value={selectedOption}
              defaultValue={filteredData?.brand}
            >
              {/* <option value="selectedOption">{selectedOption}</option> */}
              <option value="Toyota">Toyota</option>
              <option value="Ford">Ford</option>
              <option value="Honda">Honda</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Nissan">Nissan</option> */
              {/* Add more brand options here */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-200">Type Name:</label>
            <select
              name="type"
              className="w-full border border-gray-300 rounded p-2 select select-bordered"
              defaultValue={filteredData?.type}
            >
              <option value="Hybrid">Hybrid</option>
              <option value="SportsCar">Sports Car</option>
              <option value="OffRoad">Off-Road</option>
              <option value="Sedan">Sedan</option>
              {/* Add more type options here */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-200">Price:</label>
            <input
              type="text"
              name="price"
              className="w-full border border-gray-300 rounded p-2"
              defaultValue={filteredData?.price}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200">Short Description:</label>
            <textarea
              name="shortDescription"
              className="w-full border border-gray-300 rounded p-2"
              defaultValue={filteredData?.shortDescription}
            />
          </div>
          <div className="mb-4 mx-auto text-center">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend" className="text-white">
                Rating
              </Typography>
              <Rating
                name="simple-controlled"
                value={ratingvalue}
                defaultValue={Number(ratingvalue)}
                onChange={(event, newValue) => {
                  setRatingvalue(newValue);
                }}
              />
              {/* <Rating
                name="rating"
                defaultValue={ratingValue}
                value={rating}
                onChange={handleRatingChange}
              /> */}
            </Box>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#FF6347] text-white py-2 px-4 rounded hover-bg-[#FF6347]"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpDateProduct;
