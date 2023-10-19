import React, { useContext, useEffect, useState } from "react";
import { Paper, Typography, Button, Rating, Box } from "@mui/material";
import { CarsContext } from "../../MainLayout/MainLayout";
import swal from "sweetalert";
import axios from "axios";

const ItemCard = ({ item }) => {
  const { fetchCarsData, fetchItemOnCartData, itemOnCartData } =
    useContext(CarsContext);
  const [carsData, setCarsData] = useState([]);

  const {
    image,
    name,
    brand,
    type,
    price,
    shortDescription,
    _id,
    ratingvalue,
  } = carsData;
  // console.log(carsData);
  // http://localhost:5000/itemOnCart
  // console.log(typeof +_id);

  // const { brandName } = useParams();

  // console.log(brandName);
  // const filteredData = carsData.filter((car) => car.brand === brandName);

  useEffect(() => {
    const fetchCarsData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/itemOnCart/${item._id}`
        );
        setCarsData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCarsData(); // Call the function

    // Add fetchCarsData to the dependency array
  }, [item._id]);
  const myRateingFomDB = carsData?.ratingvalue;
  // console.log(myRateingFomDB);
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
          .delete(`http://localhost:5000/itemOnCart/${itemId}`)
          .then((res) => {
            console.log(res.data);

            fetchItemOnCartData();

            swal("Success", "Car deleted successfully!", "success");
          })
          .catch((err) => {
            console.log(err);
            swal("Error", "An error occurred while deleting the Car.", "error");
          });
      } else {
        swal("Car is safe!");
      }
    });
  };

  return (
    <Paper elevation={3} className="my-4 p-4">
      <div className="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
        <div className="px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
          <img
            className="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl"
            src={image}
            alt={name}
          />
          <h1 className="mt-5 font-bold text-3xl italic lg:mb-4  lg:mt-7">
            {name}
          </h1>
          <Typography
            variant="subtitle1"
            className="font-semibold text-gray-600"
          >
            <p className="font-semibold text-xl text-gray-600">
              {" "}
              Brand: {brand} | Type: {type}
            </p>
          </Typography>
          <Typography variant="body1">
            {" "}
            <p className="font-semibold text-xl text-gray-600">
              Price: ${price}
            </p>{" "}
          </Typography>
          <Typography variant="body1">
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
              {/* <Rating name="simple-controlled" value={myRateingFomDB} /> */}
              {/* <Rating
                name="simple-controlled"
                // value={ratingvalue}
                defaultValue={Number(myRateingFomDB)}
              /> */}

              <Rating name="simple-controlled" value={+carsData?.ratingvalue} />
            </Box>
          </Typography>
          <p className="text-lg text-gray-600 text-justify pt-2">
            {shortDescription?.length > 330
              ? shortDescription?.slice(0, 200)
              : shortDescription}
            ...
          </p>
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
    </Paper>
  );
};

export default ItemCard;
