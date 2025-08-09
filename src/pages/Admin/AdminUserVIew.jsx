import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import attorney from '../../../attorneys.json';
import depart from '../../../Department.json';

const AdminUserVIew = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = attorney[id];

  // Default selected departments (for demo, you can load real values)
  const [selectedDepartments, setSelectedDepartments] = useState([
    'Patent',
    'Internet law',
  ]);
  const [newDept, setNewDept] = useState('');

  if (!user) return <div className="p-10 text-red-500 text-xl">User not found</div>;

  const handleAddDepartment = () => {
    if (newDept && !selectedDepartments.includes(newDept)) {
      setSelectedDepartments(prev => [...prev, newDept]);
    }
    setNewDept('');
  };

  const handleRemoveDepartment = (dept) => {
    setSelectedDepartments(prev => prev.filter(d => d !== dept));
  };

  const [scale, setscale] = useState(false)

  return (
    <div className="p-10 w-full min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto shadow-lg overflow-hidden">
        <div className="flex justify-between items-center border-b p-6 text-black">
          <h2 className="text-2xl font-bold">User Detail</h2>
          <button
            onClick={() => navigate(-1)}
            className="bg-zinc-300 text-[rgb(148,28,30)] cursor-pointer font-semibold py-1 px-4 rounded hover:bg-gray-200 transition"
          >
            Back
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 p-6">
          <div className="flex-shrink-0">
            <img
              src={user.img}
              alt={user.name}
              className="w-55 h-80 object-cover rounded-lg shadow-md border"
            />
          </div>

          <div className="flex-1">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Name:</h3>
              <p className="text-gray-700">{user.name}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold">Email:</h3>
              <p className="text-gray-700">{user.email}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Affiliations:</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {user.affiliations.map((a, index) => (
                  <li key={index}>{a}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Assigned Departments:</h3>
              <div className="flex flex-wrap gap-2">
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {selectedDepartments.map((a, index) => (
                  <li key={index}>{a}</li>
                ))}
              </ul>
              </div>
            </div>

            <button 
            onClick={()=> setscale(true)}
            className='py-2 cursor-pointer px-4 bg-[rgb(148,28,30)] text-white rounded my-4'>Edit Departments</button>
            {scale && (
               <div className="my-6">
              <div className="flex gap-4 items-center">
                <select
                  value={newDept}
                  onChange={(e) => setNewDept(e.target.value)}
                  className="py-2 px-3 border border-zinc-400 rounded w-60"
                >
                  <option value="">Select Department</option>
                  {depart.map((e, index) => (
                    <option key={index} value={e.title}>
                      {e.title}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleAddDepartment}
                  className="bg-[rgb(148,28,30)] text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Add
                </button>
              </div>
              <div className='w-full flex gap-3 items-center my-6'>
                 {selectedDepartments.map((dept, index) => (
                  <span
                    key={index}
                    className="bg-gray-300 text-sm text-black px-3 py-1 rounded-full flex items-center"
                  >
                    {dept}
                    <button
                      onClick={() => handleRemoveDepartment(dept)}
                      className="ml-2 text-red-600 font-bold hover:text-red-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <button 
              onClick={()=> setscale(false)}
              className='py-2 px-4 cursor-pointer bg-[rgb(148,28,30)] text-white rounded my-2'>Confirm edit</button>
            </div>

            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserVIew;
