import { useState } from 'react';
import users from '../../../attorneys.json'


const AdminDashboard = () => {

  const [ReqtoolsforCatalogue, setReqtoolsforCatalogue] = useState(0)
  const [allTools, setallTools] = useState(0)

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-700">👥 Total Users</h3>
          <p className="text-3xl font-bold text-[rgb(148,28,30)] mt-2">{users.length} </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-700">🏢 Departments</h3>
          <p className="text-3xl font-bold text-[rgb(148,28,30)] mt-2">0</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-700">🛠 Tools</h3>
          <p className="text-3xl font-bold text-[rgb(148,28,30)] mt-2">0</p>
        </div>

      </div>

      {/* tools  */}
      <div className="bg-white mb-7 shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Tools</h3>
        <ul className="space-y-3 text-gray-700">
          {allTools.length > 0 ? (
            allTools
          ) : <p className='text-red-400'>No tools added</p>}
        </ul>
      </div>

        <div className="bg-white  shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Requested tools for catalogue</h3>
        <ul className="space-y-3 text-gray-700">
          {ReqtoolsforCatalogue.length > 0 ? (
            ReqtoolsforCatalogue
          ) : <p className='text-red-400'>No Requested tools</p>}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
