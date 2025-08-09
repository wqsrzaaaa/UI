import React, { useState } from "react";
import logoRemove from '../../../public/logoRemovebg.png'
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";


const AdminHOme = () => {

  const navigate = useNavigate()
  const [sidebar, setsidebar] = useState(false)

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 relative" >
        <div
          onClick={() => setsidebar(true)}
          className="w-full flex items-center pl-7 text-2xl md:hidden h-15"><IoReorderThreeOutline /></div>
        <aside
          className={`${sidebar ? 'left-0' : '-left-100'}
        min-w-64 min-h-screen bg-gray-300 text-black md:static absolute transition-all duration-300 z-99 p-6`}>
          <img className="w-30" src={logoRemove} alt="" />
          <nav className="space-y-4 flex flex-col gap-4 text-xl">
            <NavLink
              onClick={() => setsidebar(false)}
              to="/admin"
              end
              className={({ isActive }) =>
                isActive ? "text-[rgb(148,28,30)] font-semibold" : "hover:text-[rgb(148,28,30)]"
              }
            >
              📊 Dashboard
            </NavLink>
            <NavLink
              onClick={() => setsidebar(false)}
              to="/admin/user"
              className={({ isActive }) =>
                isActive ? "text-[rgb(148,28,30)] font-semibold" : "hover:text-[rgb(148,28,30)]"
              }
            >
              👥 Users
            </NavLink>
            <NavLink
              onClick={() => setsidebar(false)}
              to="/admin/create-tool"
              className={({ isActive }) =>
                isActive ? "text-[rgb(148,28,30)] font-semibold" : "hover:text-[rgb(148,28,30)]"
              }
            >
              🛠 Create Tool
            </NavLink>
            <NavLink
              onClick={() => setsidebar(false)}
              to="/admin/department"
              className={({ isActive }) =>
                isActive ? "text-[rgb(148,28,30)] flex items-center gap-2 font-semibold" : "hover:text-[rgb(148,28,30)] flex items-center gap-2"
              }
            >  <FaRegBuilding />
              Department
            </NavLink>
            <button
              onClick={() => setsidebar(false)}
              className='mr-9 bg-[rgb(148,28,30)] text-white md:hidden h-11 w-23  cursor-pointer rounded '>back</button>
          </nav>
        </aside>


        <Outlet />
      </div>
    </>
  );
};
export default AdminHOme;