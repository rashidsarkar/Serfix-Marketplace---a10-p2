import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banar from "../../Components/Banar";
import { CarsContext } from "../../MainLayout/MainLayout";
import ItemCard from "./ItemCard";
import SectionTitle from "../../Components/SectionTitle";
import swal from "sweetalert";
import axios from "axios";
import { AuthContext } from "../../FireBase/AuthProvider";
function MyCart() {
  const { user, logOut } = useContext(AuthContext);
  const { fetchCarsData, carsData, fetchItemOnCartData, itemOnCartData } =
    useContext(CarsContext);
  const [carsDataForUI, setCarsDataForUI] = useState([]);
  const currentUserId = user?.providerData[0]?.uid;

  // Define fetchCarsDataOnMycat function outside of the useEffect
  const fetchCarsDataOnMycat = async () => {
    try {
      const response = await axios.get(
        `https://car-web-server-three.vercel.app/itemOnCart/${currentUserId}`
      );
      setCarsDataForUI(response.data);
      fetchItemOnCartData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCarsDataOnMycat();
  }, [currentUserId, fetchItemOnCartData]);

  const handleDelete = (itemId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Car!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((res) => {
      if (res) {
        axios
          .delete(
            `https://car-web-server-three.vercel.app/itemOnCart/${itemId}`
          )
          .then((res) => {
            console.log(res.data);
            fetchCarsDataOnMycat();
            swal("Success", "Car deleted successfully!", "success");
          })
          .catch((err) => {
            console.error(err);
            swal("Error", "An error occurred while deleting the Car.", "error");
          });
      } else {
        swal("Car is safe!");
      }
    });
  };

  return (
    <div>
      <Banar
        image="https://i.ibb.co/QfLbhW7/pexels-hyundai-motor-group-11194874.jpg"
        title="Your Dream Car Awaits"
        decpt="Explore and find the perfect car for your needs."
      ></Banar>
      <div>
        <SectionTitle title="Browse Your Selection"></SectionTitle>

        {Array.isArray(carsDataForUI) && carsDataForUI.length === 0 ? (
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold">Your cart is empty</h2>
            <p className="text-gray-600">Add some cars to your cart</p>
          </div>
        ) : (
          carsDataForUI?.map((item) => (
            <ItemCard
              handleDelete={handleDelete}
              key={item._id}
              item={item}
            ></ItemCard>
          ))
        )}
      </div>
    </div>
  );
}

export default MyCart;
