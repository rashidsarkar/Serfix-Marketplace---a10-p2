import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import "./SingleBrand.css";

function SingleBrand() {
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
    </div>
  );
}

export default SingleBrand;
