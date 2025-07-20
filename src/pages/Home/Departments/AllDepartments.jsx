import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AllDepartments = () => {
  const linkStyle = ({ isActive }) =>
    `px-5 py-2 rounded-md border transition-all duration-300 ${
      isActive
        ? 'bg-[rgb(148,28,30)] text-white font-semibold border-[rgb(148,28,30)]'
        : 'bg-white text-[rgb(148,28,30)] border-[rgb(148,28,30)]'
    }`;

  return (
    <div className='w-full relative h-screen'>
      <div className='w-full flex flex-col items-center justify-center gap-3 mt-5'>
        <h1 className='text-3xl font-semibold'>
          Legal
          <span
            style={{ color: 'rgb(148, 28, 30)' }}
            className='text-4xl inline-block transform -rotate-3 mx-2'
          >
            &nbsp;𝓈𝑒𝓇𝓋𝒾𝒸𝑒𝓈&nbsp;
          </span>
          we provide
        </h1>

        <p className='text-xl w-[80%] text-center mt-3 text-zinc-800'>
          Loza & Loza is a comprehensive intellectual property law firm, staffed by
          experienced attorneys specializing in a wide range of IP disciplines,
          including the following areas:
        </p>
      </div>

      <div className='w-full mt-5 h-35 flex gap-3 items-center justify-center flex-wrap'>
        <NavLink to="/" className={linkStyle}>Patents</NavLink>
        <NavLink to="/trademarket" className={linkStyle}>Trade Market</NavLink>
        <NavLink to="/copyright" className={linkStyle}>Copyright</NavLink>
        <NavLink to="/internet-law" className={linkStyle}>Internet Law</NavLink>
        <NavLink to="/counseling-license" className={linkStyle}>Counseling & License</NavLink>
        <NavLink to="/litigation" className={linkStyle}>Litigation</NavLink>
      </div>

      <div className='w-full h-screen'>
          <Outlet />
      </div>


    </div>
  );
};

export default AllDepartments;
