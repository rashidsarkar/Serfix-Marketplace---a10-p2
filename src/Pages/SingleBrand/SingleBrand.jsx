import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import "./SingleBrand.css";
import { Box, Rating, Typography } from "@mui/material";
import SectionTitle from "../../Components/SectionTitle";
import axios from "axios";
import CarCard from "../CarCard/CarCard";
import { CarsContext } from "../../MainLayout/MainLayout";

function SingleBrand() {
  const { fetchCarsData, carsData } = useContext(CarsContext);

  const { brandName } = useParams();

  // console.log(brandName);
  const filteredData = carsData.filter((car) => car.brand === brandName);

  return (
    <div>
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
          <img
            src="https://i.ibb.co/RSNZZhn/preorder2.webp"
            className="md:h-[600px] mx-auto"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div>
        <SectionTitle title={`${brandName} Collection`} />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {filteredData.map((car) => (
            <CarCard car={car} key={car._id}></CarCard>
          ))}
        </div>
        {filteredData.length === 0 && (
          <div className="text-xl text-center text-gray-600 min-h-[60vh]">
            No products available for this brand at the moment.
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleBrand;
