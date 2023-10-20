import React, { useContext, useEffect, useState } from "react";
import { Paper, Typography, Button, Rating, Box } from "@mui/material";
import { CarsContext, ThemeContext } from "../../MainLayout/MainLayout";
import swal from "sweetalert";
import axios from "axios";
import { AuthContext } from "../../FireBase/AuthProvider";
// import { ThemeContext } from "@emotion/react";

const ItemCard = ({ item, handleDelete }) => {
  const { user, logOut } = useContext(AuthContext);

  const currentUserId = user?.providerData[0]?.uid;
  const { fetchCarsData, fetchItemOnCartData, itemOnCartData } =
    useContext(CarsContext);
  const [carsData, setCarsData] = useState([]);
  // console.log(item);

  const {
    image,
    name,
    brand,
    type,
    price,
    shortDescription,
    _id,
    ratingvalue,
  } = item;
  // console.log(carsData);
  // https://car-web-server-three.vercel.app/itemOnCart
  // console.log(typeof +_id);

  // const { brandName } = useParams();

  // console.log(brandName);
  // const filteredData = carsData.filter((car) => car.brand === brandName);

  useEffect(() => {
    const fetchCarsData = async () => {
      try {
        const response = await axios.get(
          `https://car-web-server-three.vercel.app/itemOnCart/107944353138273121977`
        );
        setCarsData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCarsData(); // Call the function

    // Add fetchCarsData to the dependency array
  }, [itemOnCartData]);
  console.log(carsData);
  const myRateingFomDB = item?.ratingvalue;
  // console.log(myRateingFomDB);

  const { theme } = useContext(ThemeContext);
  const bgColorStyleCard = {
    backgroundColor: theme === "light" ? "#E5E6E6" : "#15191E",
  };
  const textColorStyle = {
    color: theme === "light" ? "#252d41" : "#f1f1f1",
  };

  console.log(theme);
  // const backgroundColor = theme === "light" ? "#E6E6" : "#191E";
  return (
    <div className="my-4 p-4">
      <div
        style={bgColorStyleCard}
        className="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none   lg:h-full"
      >
        <div className="px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 ">
          <img
            className="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl"
            src={image}
            alt={name}
          />
          <h1 className="mt-5 font-bold text-3xl italic lg:mb-4 lg:mt-7">
            {name}
          </h1>
          <div>
            <p
              style={textColorStyle}
              className="font-semibold text-xl text-gray-600"
            >
              Brand: {brand} | Type: {type}
            </p>
            <p
              style={textColorStyle}
              className="font-semibold text-xl text-gray-600"
            >
              Price: ${price}
            </p>
            <div className="flex items-center gap-2">
              <p
                style={textColorStyle}
                className="text-gray-600 text-xl font-medium"
              >
                Rating
              </p>
              <Rating name="simple-controlled" value={+item?.ratingvalue} />
            </div>
            <p
              style={textColorStyle}
              className="text-lg text-gray-600 text-justify pt-2"
            >
              {shortDescription?.length > 330
                ? shortDescription?.slice(0, 200)
                : shortDescription}
              ...
            </p>
          </div>
          <button
            onClick={() => handleDelete(_id)}
            className="mt-5 inline-block rounded bg-[#d54242] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#FF6347] hover:shadow-lg focus:bg-[#d54242] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#d54242] active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-md"
          >
            Delete
          </button>
        </div>
        <div className="hidden relative lg:block lg:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
            src={image}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
