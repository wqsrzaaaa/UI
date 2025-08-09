import React, { useState } from 'react';
import attorney from '../../../attorneys.json';
import { Link, useNavigate } from 'react-router-dom';

const AdminUser = () => {
  const [deleteUser, setdeleteUser] = useState('')
  const [scale, setscale] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="p-10 w-full bg-gray-100 ">
      <div className='flex justify-between px-3'><h2 className="text-2xl font-semibold mb-4">Users</h2>
        <button
        onClick={()=> navigate('/admin/user/add')}
         className='cursor-pointer rounded-lg h-9 px-4 bg-red-400 text-white'>Add User</button>
      </div>
      <table className="w-full bg-white shadow rounded mb-10">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className='pl-3'>No</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {attorney.map((user, i) => (
            <tr key={i} className="border-t" >
              <td className='pl-3'>{i + 1}</td>
              <th className="text-start p-3">{user.name}</th>
              <td className="p-3">{user.email}</td>
              <td className=" space-x-2">
                <Link to={`/admin/user/view/${i}`} className="text-[rgb(148,28,30)] cursor-pointer hover:text-red-400">View & edit</Link>
                <Link

                onClick={()=>( setdeleteUser(user.name) , setscale(true))}
                 className="text-[rgb(148,28,30)] cursor-pointer hover:text-red-400">delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        <div className={`w-120 ${scale ? 'scale-100'  : "scale-0"} h-50 transition-all duration-300 bg-zinc-300 fixed flex-col gap-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center`}>
        <p className='text-xl'>do you want to delete {deleteUser}? </p>
        <div className='flex gap-6'>
          <button 
          onClick={()=> window.location.reload()}
          className='bg-red-400 cursor-pointer text-white py-2 px-5'>confirm</button>
          <button
          onClick={()=> setscale(false)}
           className='bg-green-400 cursor-pointer text-white py-2 px-5'>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
