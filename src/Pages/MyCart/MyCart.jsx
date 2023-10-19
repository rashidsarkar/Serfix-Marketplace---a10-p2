import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Banar from "../../Components/Banar";
import { CarsContext } from "../../MainLayout/MainLayout";
import ItemCard from "./ItemCard";
import SectionTitle from "../../Components/SectionTitle";
import swal from "sweetalert";
import axios from "axios";

function MyCart() {
  const { fetchCarsData, carsData, fetchItemOnCartData, itemOnCartData } =
    useContext(CarsContext);

  return (
    <div>
      <Banar
        image={`https://i.ibb.co/QfLbhW7/pexels-hyundai-motor-group-11194874.jpg`}
        title={`Your Dream Car Awaits`}
        decpt={`Explore and find the perfect car for your needs.`}
      ></Banar>
      <div>
        <SectionTitle title={"Browse Your Selection"}></SectionTitle>

        {itemOnCartData.length === 0 ? (
          // Display a message when the cart is empty
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold">Your cart is empty</h2>
            <p className="text-gray-600">Add some cars to your cart</p>
          </div>
        ) : (
          // Render cart items
          itemOnCartData.map((item) => (
            <ItemCard key={item._id} item={item}></ItemCard>
          ))
        )}
      </div>
    </div>
  );
}

export default MyCart;
