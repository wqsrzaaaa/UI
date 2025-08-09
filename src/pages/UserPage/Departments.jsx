import React, { useState } from 'react';
import departments from '../../../Department.json';
import { useNavigate } from 'react-router-dom';

const currentUser = 'Waqas Raza';

const Departments = () => {

  const navigate = useNavigate()

  const myDepartments = departments.filter((dept) =>
  dept.users.includes(currentUser)
);

const myDepartmentTitles = myDepartments.map((dept) => dept.title);

const availableDepartments = departments.filter(
  (dept) => !myDepartmentTitles.includes(dept.title)
);

  const [scale, setscale] = useState(false);
  const [LeaveScale, setLeaveScale] = useState(false)
  const [selectedDept, setSelectedDept] = useState(null); 
  const [LeaveDept, setLeaveDept] = useState(null); 

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-black mb-6">Departments</h1>

      <div className="mb-10">
        <h2 className="text-xl font-semibold text-[rgb(148,28,30)]  mb-4"> My Departments</h2>
        {departments.length > 0 ? (
          <div className="grid md:pl-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white md:p-6 rounded shadow-md  "
              >

                <div className=''></div>

                <img
                  src={dept.img}
                  alt={dept.title}
                  className="h-40 w-full object-cover rounded mb-4"
                />
                <h3 className="text-lg font-bold">{dept.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                <button 
                onClick={()=> (setLeaveDept(dept) , setLeaveScale(true))}
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

      <div className="relative">
        <h2 className="text-xl font-semibold mb-4"> Explore Other Departments</h2>

        {availableDepartments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {availableDepartments.map((dept, index) => (
              <div key={index} className="md:p-6 shadow-md ">
                <img
                  src={dept.img}
                  alt={dept.title}
                  className="h-40 w-full object-cover rounded mb-4"
                />
                <h3 className="text-lg font-bold">{dept.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedDept(dept);
                      setscale(true);
                    }}
                    className="px-4 py-1 bg-[rgb(148,28,30)] text-white rounded cursor-pointer"
                  >
                    Join
                  </button>
                  <button 
                  onClick={()=> navigate('/user/department' , {state : dept})}
                  className="px-4 py-1 bg-gray-300 rounded cursor-pointer hover:bg-gray-400">
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">You're already part of all departments.</p>
        )}

        {scale && selectedDept && (
          <div className="fixed w-130 h-50 z-50 rounded bg-gray-400 flex flex-col items-center justify-center gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 transition-all duration-300 scale-100">
            <h1 className="text-xl">Do you want to join <strong>{selectedDept.title}</strong>?</h1>
            <p>Send request to admin.</p>
            <div className="flex gap-8 items-center justify-evenly">
              <button className="px-5 py-2 bg-green-500 rounded cursor-pointer text-white">
                Yes
              </button>
              <button
                onClick={() => {
                  setscale(false);
                  setSelectedDept(null); 
                }}
                className="px-5 py-2 bg-red-500 rounded cursor-pointer text-white"
              >
                No
              </button>
            </div>
          </div>
        )}

        {LeaveScale && LeaveDept && (
          <div className="fixed w-130 h-50 z-50 rounded bg-gray-400 flex flex-col items-center justify-center gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 transition-all duration-300 scale-100">
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
    </div>
  );
};

export default Departments;
