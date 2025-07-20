import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import attorneys from "../../../attorneys.json";

const defaultImage = "https://via.placeholder.com/150x150";

const AllUsers = () => {
  const half = Math.ceil(attorneys.length / 2);
  const firstHalf = attorneys.slice(0, half);
  const secondHalf = attorneys.slice(half);

  const renderSlides = (data) =>
    data.map((attorney, index) => (
      <SwiperSlide
        key={index}
        className="w-60 h-1/2 p-4 border rounded-2xl  bg-white flex items-center justify-center"
      >
        <img
          src={attorney.img}
          alt={attorney.name}
          className="w-[80%] h-[320px] object-cover object-top ml-4 "
        />

        <div className="text-lg font-semibold  text-center">
          {attorney.name}
        </div>

        <div className="text-sm text-gray-600  text-center px-2">
          {attorney.affiliations?.[0]}
        </div>

        <div className=" flex flex-col items-center gap-2">
          <button className=" text-sm  text-[rgb(148,28,30)] cursor-pointer rounded ">
            View Attorney Profile
          </button>
          <button className="px-4 py-2 text-sm bg-[rgb(148,28,30)] text-white rounded hover:bg-red-900 cursor-pointer transition">
            Contact Me
          </button>
        </div>
      </SwiperSlide>
    ));

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8 p-6 bg-gray-50">
      <Swiper
        className="w-full h-1/2"
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {renderSlides(firstHalf)}
      </Swiper>

    </div>
  );
};

export default AllUsers;
