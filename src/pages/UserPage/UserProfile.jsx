import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import departments from '../../../Department.json';


const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Zack',
    email: 'zack@example.com',
    profileImage: 'https://tse4.mm.bing.net/th/id/OIP.-duT7_pjhg_EQFC2Lec6IQHaFE?rs=1&pid=ImgDetMain&o=7&rm=3',
    departments: ['Patent Team', 'Internet Law'],
    bio: `Zack is a dedicated and versatile legal assistant with a strong
    focus on patent law and internet regulations. He helps clients navigate intellectual property rights, draft legal documents, and manage compliance tasks efficiently. Known for his punctuality and attention to detail, Zack is capable of working under tight deadlines and handling multiple assignments simultaneously.
    His working hours are from 9:00 AM to 6:00 PM, Monday through Saturday. He is available for meetings, task collaboration, and tool-based legal support during this time.`
  });

  useEffect(() => {
    fetch('/usetool.json')
      .then((res) => res.json())
      .catch((err) => console.error('Failed to load tools:', err));
  }, []);

  const navigate = useNavigate()

  const [LeaveScale, setLeaveScale] = useState(false)
  const [LeaveDept, setLeaveDept] = useState(null);

  return (
    <div className=" md:p-6 mt-7">
      <div className="flex flex-col md:flex-row relative px-6 space-x-4 mb-8">
         <button 
          onClick={()=> navigate(-1)}
          className='mr-9 bg-[rgb(148,28,30)] text-white absolute top-0 right-0 md:hidden h-11 w-23  cursor-pointer rounded '>back</button>
        <img
          src={user.profileImage}
          alt="Profile"
          className="w-40 h-40 object-cover"
        />
        <div className='w-full flex relative justify-between'>
          <div>
            <h2 className="text-2xl mt-4 font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <button className='text-sm text-zinc-500 cursor-pointer hover:underline'>Edit profile</button>
          </div>
          <button 
          onClick={()=> navigate(-1)}
          className='mr-9 bg-[rgb(148,28,30)] text-white md:block hidden h-11 w-23  cursor-pointer rounded '>back</button>
        </div>
      </div>

      <div className='w-full flex px-6 flex-col gap-2 '>
        <h1 className='text-2xl '>Bio</h1>
        <p className='text-sm text-zinc-700'>{user.bio}</p>
      </div>

      <div className='w-full mt-8  flex flex-col gap-2'>
        <h1 className='text-2xl px-6 '>My current department</h1>
        {departments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded shadow-md  "
              >

                <img
                  src={dept.img}
                  alt={dept.title}
                  className="h-40 w-full object-cover rounded mb-4"
                />
                <h3 className="text-lg font-bold">{dept.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                <button
                  onClick={() => (setLeaveDept(dept), setLeaveScale(true))}
                  className="mt-2 px-4 py-1 bg-[rgb(148,28,30)] text-white rounded  cursor-pointer">
                  Leave
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 pl-7">You haven't joined any departments yet.</p>
        )}
      </div>


      {LeaveScale && LeaveDept && (
        <div className="fixed w-130 h-50 z-50 rounded bg-gray-300 flex flex-col items-center justify-center gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 transition-all duration-300 scale-100">
          <h1 className="text-xl">Do you want to leave <strong>{LeaveDept.title}</strong>?</h1>
          <div className="flex gap-8 items-center justify-evenly">
            <button className="px-5 py-2 bg-green-500 rounded cursor-pointer text-white">
              Yes
            </button>
            <button
              onClick={() => {
                setLeaveScale(false);
                setLeaveDept(null);
              }}
              className="px-5 py-2 bg-red-500 rounded cursor-pointer text-white"
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
