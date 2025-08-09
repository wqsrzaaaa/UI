import logoRemovebg from '../../public/logoRemovebg.png'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const socialRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      socialRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'bounce.out' }
    );
  }, []);

  return (
    <div
      className={`w-full ${
        scrolled ? 'bg-zinc-200 text-black' : 'bg-transparent text-white'
      } h-22 fixed z-[99] top-0 left-0 flex items-center justify-between transition-all duration-300`}
    >
      <img className='w-27 mt-5' src={logoRemovebg} alt="" />

      <div className='w-[80%] hidden md:flex h-full flex-col gap-4 items-center justify-center'>
        <div
          ref={socialRef}
          style={{ backgroundColor: 'rgb(148, 28, 30)' }}
          className='w-[200px] text-white h-12 flex items-center justify-center gap-7 rounded-b-xl'
        >
          <FaTwitter
            title='https://x.com/loza_loza_llp'
            onClick={() => window.open('https://x.com/loza_loza_llp')}
            className='hover:text-zinc-300 cursor-pointer scale-135'
          />
          <FaFacebookSquare
            onClick={() => window.open('https://www.facebook.com/LozaLozaIP/')}
            className='hover:text-zinc-300 cursor-pointer scale-135'
          />
          <FaLinkedin
            onClick={() => window.open('https://www.linkedin.com/company/loza-&-loza-llp/')}
            className='hover:text-zinc-300 cursor-pointer scale-135'
          />
          <FaYoutube
            onClick={() => window.open('https://www.youtube.com/channel/UCCRZgbIHHuoj44DKyr0JLrQ')}
            className='hover:text-zinc-300 cursor-pointer scale-135'
          />
        </div>

        <div className='w-[80%] h-[30%] flex pb-3 gap-8 justify-evenly items-center'>
          <Link className='hover:text-red-800 font-semibold' to={'/'}>Lawyer Directory</Link>
          <Link className='hover:text-red-800 font-semibold' to={'/'}>Practice Fields</Link>
          <Link className='hover:text-red-800 font-semibold' to={'/'}>News</Link>
          <Link className='hover:text-red-800 font-semibold' to={'/'}>Diversity</Link>
          <Link className='hover:text-red-800 font-semibold' to={'/'}>Careers</Link>
          <Link className='hover:text-red-800 font-semibold' to={'/contact'}>Contact</Link>
        </div>
      </div>

      {/* CONTACT */}
      <div className='w-[230px] h-full flex flex-col items-center justify-center gap-1'>
        <p style={{ color: 'rgb(148, 28, 30)' }} className='text-xl font-bold'>Book Now</p>
        <p className='font-semibold'>(877) 406-5164</p>
      </div>
    </div>
  );
};


export default Nav