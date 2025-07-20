import React from 'react'
import experience from '../../../public/experience.png'
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsGraphUpArrow } from "react-icons/bs";
import hs from '../../../public/hs.avif'

const OurTrust = () => {
  return (
    <div className='w-full relative '>

      <div className='w-full relative h-screen'>
        <div className='w-full h-full bg-black/45 absolute top-0 left-0 z-2 rounded-t-3xl'></div>
        <img
        className='w-full h-full object-center object-cover rounded-t-3xl'
        src={hs} alt="handShake" />
    
        <div className='w-full h-full flex flex-col text-white justify-center  absolute top-0 left-0 z-4'>

          <h1 className='text-5xl underline pl-14 '>Why Choose Us?</h1>
          <div className='w-full  h-[70%] flex items-end justify-evenly'>

              <div className='w-90 h-70 pr-5  flex flex-col gap-4 border-r-1'>
                <img className='w-25 fill-white img' src={experience} alt="" />
                <h1 className='text-3xl'>Experience</h1>
                <p >Dedicated to excellence, our legal team provides trusted guidance and unwavering support across all areas of intellectual property law.</p>
              </div>
              <div className='w-90 h-70 pr-5  flex flex-col gap-4 border-r-1'>
                <VscWorkspaceTrusted className='w-25 text-5xl mt-3' />
                <h1 className='text-3xl'>Trusted</h1>
                <p >A reputation built on integrity, results, and client satisfaction, with years of trusted partnerships.</p>
              </div>
              <div className='w-90 h-70 pr-5  flex flex-col gap-4'>
                <BsGraphUpArrow className='w-25 text-5xl mt-3' />
                <h1 className='text-3xl'>Strategic</h1>
                <p >We don't just react, we anticipate challenges and craft forward-thinking solutions that protect your assets long term.</p>
              </div>

          </div>
        
        </div>
      </div>

      <div className='w-full h-[60vh] flex items-center justify-center'>
        <div className='w-[90%] h-[80%] flex justify-between pr-8 rounded-3xl bg-[rgb(148,28,30)]'>
      
          <div className='w-120 h-full flex flex-col gap-2 items-center justify-center'>
            <h1 className='text-4xl text-white '>Let's Talk. <br /> We're Ready When You Are</h1>
          </div>
            <div className='w-80 h-full text-white  flex flex-col gap-2 items-center justify-center'>
                <p className='text-2xl'>Free Consultion</p>
                <div className='text-center font-sans'>
                  <p>Main Line: (877) 406-5164</p>
                  <p>Patent Questions: (877) 477-4332</p>
                </div>
            </div>
        </div>
      </div>
   
    </div>
  )
}

export default OurTrust