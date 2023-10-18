import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import "./SingleBrand.css";
import { Box, Rating, Typography } from "@mui/material";
import SectionTitle from "../../Components/SectionTitle";
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
  // const product = false;

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
      <SectionTitle title={`Toyota Collection`} />
      <div>
        {product ? (
          <div className="card card-compact my-10 w-96  bg-base-300 shadow-xl">
            <figure>
              <img
                src={`https://i.ibb.co/JddJCCC/pexels-ambady-kolazhikkaran-14061321.jpg`}
                alt={name}
                className="rounded-t-lg"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-semibold italic">
                Toyota GR-456
              </h2>
              <p className="text-gray-600 text-xl">
                Brand: {brandName} || <span>Type: Off Road</span>{" "}
              </p>
              {/* <p className="text-gray-600">Type: Off road</p> */}
              <p className="text-gray-600 text-xl">Price: $5000</p>
              <div className="text-left">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Typography component="legend" className="">
                    <p className="text-gray-600 text-xl">Rating</p>
                  </Typography>
                  <Rating name="simple-controlled" value={Ratingvalue} />
                </Box>
              </div>
              <div className="card-actions justify-around my-4">
                <Link to={`/brand/${brandName}/${`Toyota GR-456`}`}>
                  <button className="btn btn-primary bg-[#d54242] hover:bg-[#FF6347] text-white border-0 px-4 py-2 rounded-lg">
                    Details
                  </button>
                </Link>
                <button className="btn btn-primary bg-[#d54242] hover:bg-[#FF6347] text-white border-0 px-4 py-2 rounded-lg">
                  Update
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-xl text-center text-gray-600 min-h-[60vh]">
            No product available for this brand at the moment.
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleBrand;
