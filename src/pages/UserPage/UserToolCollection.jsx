import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import UseTool from '../../../UseTool.json'
const tools = [
  "All tools",
  "My own custom tools",
  "Tools for patent",
  "Tools for trade marks",
  "Tools for copy right",
  "Tools for internet law",
  "Tools for Counseling & License",
  "Tools for Litigation",
];

const UserToolCollection = () => {

  const swiperRef = useRef(null);
  const [selected, setSelected] = useState('All tools');

  
  return (
    <div className="w-full  p-5 md:p-10 ">
      <div className='flex flex-col md:flex-row w-full h-35 items-center md:justify-between'>
        <div className='flex flex-col '>
          <h1 className="md:text-3xl text-xl font-bold mb-8 md:pl-5">Tools Collection</h1>

          <div className="relative hidden md:block w-full px-10 py-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
            >
              <FaChevronRight />
            </button>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={5}
              slidesPerView="auto"
              className="relative w-99  flex items-center inset-shadow"
            >
              <div className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>

              {tools.map((tool, index) => (
                <SwiperSlide
                  key={index} style={{ width: 'auto' }}>
                  <button
                    onClick={() => setSelected(tool)}
                    className={`px-4 py-2 rounded-full cursor-pointer border text-sm ${selected === tool
                      ? 'bg-[rgb(148,28,30)] text-white'
                      : 'text-gray-800 hover:bg-zinc-100 hover:text-black'
                      } whitespace-nowrap transition-all`}
                  >
                    {tool}
                  </button>
                </SwiperSlide>
              ))}

              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
            </Swiper>
          </div>
        </div>

        <div className='flex items-center  gap-4'>
          <select 
            className='border  text-sm py-2 mb-3'
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {tools.map((tool, i) => (
              <option key={i} value={tool}>
                {tool}
              </option>
            ))}
          </select>

          <Link
            to={'/user/tools/maketool'}
            className='bg-[rgb(148,28,30)] text-white text-sm md:text-xl px-2 py-2 rounded cursor-pointer mb-3 md:px-6 md:py-2'
          >
            Make Tool
          </Link>
        </div>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {UseTool.map((tool, index) => (
          <SwiperSlide key={index}>
            <div className=" rounded-xl p-6 mt-8 h-full flex flex-col justify-between">
              <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
              <p className="text-gray-600">{tool.description}</p>
              <Link
                to={'/user/tools/usetool'}
                className="mt-4 px-4 py-2 mb-7 bg-[rgb(148,28,30)] flex items-center justify-center text-white rounded cursor-pointer">
                Use Tool
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UserToolCollection;
