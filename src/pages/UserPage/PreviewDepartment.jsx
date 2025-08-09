import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PreviewDepartment = () => {
  const { state: data } = useLocation();
  const navigate = useNavigate()

  const [scale, setscale] = useState(false)

  if (!data) return <div className="text-center mt-10 text-gray-500">No department data provided.</div>;

  return (
    <div className="md:p-10 p-5 max-w-6xl mx-auto">

      <div className="flex flex-col md:flex-row gap-8  md:p-6">
        <img
          src={data.img}
          alt={data.title}
          className="w-full md:w-1/2 object-cover "
        />

        <div className="flex-1 flex flex-col justify-center ">
          <h2 className="text-4xl font-bold mb-6  text-[rgb(148,28,30)]">{data.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{data.description}</p>

        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Team Members</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.users.map((user, index) => (
            <div
              key={index}
              className="border rounded-lg shadow p-2 flex items-center gap-4 hover:shadow-lg transition-all"
            >
              <img
                src={user.img}
                alt={user.name}
                className="w-18 h-18 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`w-150 ${scale ? 'scale-100' : 'scale-0'} transition-all duration-300 h-60 bg-zinc-200 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center`}>
        <h1>Send request to join {data.title}</h1>
         <div className="flex gap-8 items-center mt-3 justify-evenly">
              <button className="px-5 py-2 bg-green-500 rounded cursor-pointer text-white">
                Yes
              </button>
              <button
                onClick={() => {
                  setscale(false);
                }}
                className="px-5 py-2 bg-red-500 rounded cursor-pointer text-white"
              >
                No
              </button>
            </div>
      </div>

      <div className='w-full flex mt-7 gap-6 items-center '>
        <button 
        onClick={()=> setscale(true)}
        className=' bg-[rgb(148,28,30)] text-white py-2 px-6 rounded cursor-pointer'> Ask from admin to join</button>
        <button onClick={()=> navigate(-1)} className=' bg-[rgb(148,28,30)] text-white py-2 px-6 rounded cursor-pointer'> Back</button>
      </div>
    </div>
  );
};

export default PreviewDepartment;
