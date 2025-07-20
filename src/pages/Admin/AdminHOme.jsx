import React, { useState } from "react";
import logoRemove from '../../../public/logoRemovebg.png'
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";

const AdminHOme = () => {

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <aside className="min-w-64 bg-gray-300 text-black p-6">
          <img className="w-30" src={logoRemove} alt="" />
          <nav className="space-y-4 flex flex-col gap-4 text-xl">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                isActive ? "text-[rgb(148,28,30)] font-semibold" : "hover:text-[rgb(148,28,30)]"
              }
            >
              📊 Dashboard
            </NavLink>
            <NavLink
              to="/admin/user"
              className={({ isActive }) =>
                isActive ? "text-[rgb(148,28,30)] font-semibold" : "hover:text-[rgb(148,28,30)]"
              }
            >
              👥 Users
            </NavLink>
            <NavLink
              to="/admin/create-tool"
              className={({ isActive }) =>
                isActive ? "text-[rgb(148,28,30)] font-semibold" : "hover:text-[rgb(148,28,30)]"
              }
            >
              🛠 Create Tool
            </NavLink>
            <NavLink
              to="/admin/department"
              className={({ isActive }) =>
                isActive ? "text-[rgb(148,28,30)] flex items-center gap-2 font-semibold" : "hover:text-[rgb(148,28,30)] flex items-center gap-2"
              }
            >  <FaRegBuilding/>
               Department
            </NavLink>
          </nav>
        </aside>


        <Outlet />
      </div>
    </>
  );
};
export default AdminHOme;