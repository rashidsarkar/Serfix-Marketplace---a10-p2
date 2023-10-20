import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banar from "../../Components/Banar";
import { CarsContext } from "../../MainLayout/MainLayout";
import ItemCard from "./ItemCard";
import SectionTitle from "../../Components/SectionTitle";
import axios from "axios";
import { AuthContext } from "../../FireBase/AuthProvider";

function MyCart() {
  const { user } = useContext(AuthContext);
  const [itemOnCartData, setitemOnCartData] = useState([]);
  console.log(user);

  const baseURL = `https://car-web-server-three.vercel.app/itemOnCartUser/${user?.uid}`;

  useEffect(() => {
    // Fetch cart items when the component mounts or when 'baseURL' changes
    axios.get(baseURL).then((response) => {
      setitemOnCartData(response.data);
    });
  }, [baseURL]);

  // Function to handle item deletion and update the UI
  const handleDeleteItem = (itemId) => {
    axios
      .delete(`https://car-web-server-three.vercel.app/itemOnCart/${itemId}`)
      .then(() => {
        // Filter out the deleted item and update the state
        setitemOnCartData((prevData) =>
          prevData.filter((item) => item._id !== itemId)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!itemOnCartData) return null;

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
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold">Your cart is empty</h2>
            <p className="text-gray-600">Add some cars to your cart</p>
          </div>
        ) : (
          itemOnCartData.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onDelete={() => handleDeleteItem(item._id)} // Pass the delete function
            ></ItemCard>
          ))
        )}
      </div>
    </div>
  );
}

export default MyCart;
