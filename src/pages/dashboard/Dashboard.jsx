import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

const Dashboard = () => {
  return (
    <div className='flex'>
      <div className='w-[250px] h-screen bg-slate-900 p-4 text-white'>
        <h2 className='text-xl font-semibold mb-4'>Dashboard</h2>
        <div>
          <NavLink className="block mb-1 p-2 rounded sidebar-link" end={true} to={""}>
            Group
          </NavLink>
          <NavLink className="block mb-1 p-2 rounded sidebar-link" to="student">
            Student
          </NavLink>
          <NavLink className="block mb-1 p-2 rounded sidebar-link" to="profile">
            Profile
          </NavLink>
                    <NavLink className="block mb-1 p-2 rounded sidebar-link" to="Notification">
            Notification
          </NavLink>
                       <NavLink className="block mb-1 p-2 rounded sidebar-link" to="Help">
            Help
          </NavLink>
                       <NavLink className="block mb-1 p-2 rounded sidebar-link" to="Settings">
            Settings
          </NavLink>
          
        </div>
      </div>

      <div className='flex-1 border-8'>
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
