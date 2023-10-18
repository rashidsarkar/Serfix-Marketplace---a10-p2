import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import "./SingleBrand.css";
import { Box, Rating, Typography } from "@mui/material";
useState;

function SingleBrand() {
  const [Ratingvalue, setRatingvalue] = useState(2);

  const { brandName } = useParams();

  // Replace the sample data with GTR 34 car details
  const product = {
    image: "https://i.ibb.co/JddJCCC/pexels-ambady-kolazhikkaran-14061321.jpg", // Image URL of the GTR 34 car
    name: "GTR 34",
    brand: "Nissan", // Brand of the car
    type: "Sports Car", // Type of the car
    price: 85000.0, // Price of the car
    rating: 4.8, // Rating of the car
  };

  return (
    <div>
      <p>This is {brandName}</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/mNSypLZ/summer.jpg"
            className="md:h-[600px] mx-auto"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/yBBWnTw/offer3.jpg"
            className="md:h-[600px] mx-auto"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product.image} className="md:h-[600px] mx-auto" alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="card card-compact my-10 w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={`https://i.ibb.co/JddJCCC/pexels-ambady-kolazhikkaran-14061321.jpg`}
            alt={name}
            className="rounded-t-lg"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-xl font-semibold">Toyota GR-456</h2>
          <p className="text-gray-600">Brand: TOYOTA</p>
          <p className="text-gray-600">Type: Off road</p>
          <p className="text-gray-600">Price: $5000</p>
          <div className="text-left">
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
                value={Ratingvalue}
                onChange={(event, newValue) => {
                  setRatingvalue(newValue);
                }}
              />
            </Box>
          </div>
          <div className="card-actions justify-around my-4">
            <button className="btn btn-primary bg-[#d54242] hover:bg-[#FF6347] text-white border-0 px-4 py-2 rounded-lg">
              Details
            </button>
            <button className="btn btn-primary bg-[#d54242] hover:bg-[#FF6347] text-white border-0 px-4 py-2 rounded-lg">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBrand;
