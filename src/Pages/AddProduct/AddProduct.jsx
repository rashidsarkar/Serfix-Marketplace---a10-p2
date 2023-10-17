import React from "react";

function AddProduct() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
            <option value="Radio">Toyota</option>
            <option value="Radio">Ford</option>
            <option value="Radio">Honda</option>
            <option value="Radio">Chevrolet</option>
            <option value="Radio">Volkswagen</option>
            <option value="Radio">Nissan</option>
            {/* Add more brand options here */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Type Name:</label>
          <select
            name="type"
            className="w-full border border-gray-300 rounded p-2 select select-bordered"
          >
            <option value="Radio">SUV</option>
            <option value="Radio">Sports Car</option>
            <option value="Radio">Off-Road</option>
            <option value="Radio">Sedan</option>
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
          <div className="rating">
            <input
              type="radio"
              name="rating"
              className="mask mask-star bg-orange-400"
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star bg-orange-400"
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star bg-orange-400"
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star bg-orange-400"
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star bg-orange-400"
            />
          </div>
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
