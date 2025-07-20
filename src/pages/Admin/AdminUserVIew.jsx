import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import attorney from '../../../attorneys.json';

const AdminUserVIew = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = attorney[id];

  if (!user) return <div className="p-10 text-red-500 text-xl">User not found</div>;

  return (
    <div className="p-10 w-full min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-6 text-black ">
          <h2 className="text-2xl font-bold">User Detail</h2>
          <button 
            onClick={() => navigate(-1)} 
            className="bg-white text-[rgb(148,28,30)] cursor-pointer font-semibold py-1 px-4 rounded hover:bg-gray-200 transition"
          >
            Back
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 p-6">
          <div className="flex-shrink-0">
            <img 
              src={user.img} 
              alt={user.name} 
              className="w-55 h-80 object-cover rounded-lg shadow-md border "
            />
          </div>

          {/* Details Section */}
          <div className="flex-1">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Name:</h3>
              <p className="text-gray-700">{user.name}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold">Email:</h3>
              <p className="text-gray-700">{user.email}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Affiliations:</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {user.affiliations.map((a, index) => (
                  <li key={index}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserVIew;
