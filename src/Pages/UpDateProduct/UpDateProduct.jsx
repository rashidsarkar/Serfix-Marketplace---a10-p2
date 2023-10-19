import React, { useContext, useEffect, useState } from "react";
import { Box, Rating, Typography } from "@mui/material";
import axios from "axios";
import swal from "sweetalert";
import { CarsContext } from "../../MainLayout/MainLayout";
import { useParams } from "react-router-dom";

function UpdateProduct() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { fetchCarsData, fetchItemOnCartData } = useContext(CarsContext);

  // State to hold the form data
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    brand: "",
    type: "",
    price: "",
    shortDescription: "",
    ratingvalue: 0,
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/cars/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData(); // Fetch the specific product data
  }, [id]);

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle rating value change
  const handleRatingChange = (event, newValue) => {
    setFormData({
      ...formData,
      ratingvalue: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .put(`http://localhost:5000/cars/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.modifiedCount) {
          swal("Success", "Product updated successfully!", "success");
          fetchCarsData();
          fetchItemOnCartData();
        }
      })
      .catch((error) => {
        console.log(error);
        swal("Error", "Failed to update the product.", "error");
      });
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
              value={formData.name}
              onChange={handleSelectChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200">Image:</label>
            <input
              type="text"
              name="image"
              className="w-full border border-gray-300 rounded p-2"
              value={formData.image}
              onChange={handleSelectChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-200">Brand Name:</label>
            <select
              name="brand"
              className="w-full border border-gray-300 rounded p-2 select select-bordered"
              value={formData.brand}
              onChange={handleSelectChange}
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
            <label className="block text-gray-200">Type Name:</label>
            <select
              name="type"
              className="w-full border border-gray-300 rounded p-2 select select-bordered"
              value={formData.type}
              onChange={handleSelectChange}
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
              value={formData.price}
              onChange={handleSelectChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200">Short Description:</label>
            <textarea
              name="shortDescription"
              className="w-full border border-gray-300 rounded p-2"
              value={formData.shortDescription}
              onChange={handleSelectChange}
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
                value={formData.ratingvalue}
                onChange={handleRatingChange}
              />
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

export default UpdateProduct;
