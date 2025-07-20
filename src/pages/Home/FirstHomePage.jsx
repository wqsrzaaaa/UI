import React, { useRef, useEffect } from 'react';
import Chicago from '../../../public/chicago.jpg';
import { BsArrowRight } from "react-icons/bs";
import gsap from 'gsap';

const FirstHomePage = () => {
  const arrowRef = useRef();

  useEffect(() => {
    gsap.set(arrowRef.current, {
      scaleX: 0,
      transformOrigin: 'left',
      opacity: 0,
    });
  }, []);

  const handleHover = () => {
    gsap.to(arrowRef.current, {
      scaleX: 1,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleLeave = () => {
    gsap.to(arrowRef.current, {
      scaleX: 0,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
    });
  };

  return (
    <div className='w-full h-screen relative'>
      <div className='w-full h-full absolute z-2 bg-black/30'></div>
      <img className='w-full h-full object-center object-cover' src={Chicago} alt="" />

      <div className='w-200 h-60 z-4 text-white absolute top-1/2 -translate-y-1/2 left-15'>
        <h1 className='text-5xl font-bold'>Loza & Loza LLP</h1>
        <p className='text-xl my-4'>
          We're here to support your journey—whether you're building, scaling, or moving on.
        </p>

        <button
          className='border-1 cursor-pointer py-4 px-8 flex items-center gap-2 overflow-hidden relative'
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Contact Now
          <BsArrowRight
            ref={arrowRef}
            className='text-2xl relative'
          />
        </button>
      </div>
    </div>
  );
};

export default FirstHomePage;
