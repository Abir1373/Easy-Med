import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Homepage/Navbar';

const DashboardLayout = ({ children }) => {
    const [clicked, setClicked] = useState(1);
    const [userClicked, setUserClicked] = useState(1) ; 
    let userrole = 'user'
    return (
        <div>
            {/* navbar */}

            <div className="navbar bg-green-900">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl font-bold text-white">Easy Med</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-2">
                        <li><Link to='' className='text-2xl text-white'> Home </Link></li>
                        <li><Link to='' className='text-2xl text-white'> About </Link></li>
                        <li><Link to='' className='text-2xl text-white'> Appointment </Link></li>
                        <li><Link to='' className='text-2xl text-white'> Reviews </Link></li>
                        <li><Link to='' className='text-2xl text-white'> Contact Us </Link></li>
                        <li> <button className="btn btn-active btn-secondary text-2xl font-bold">Login</button> </li>
                    </ul>
                </div>
            </div>


            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {children}
                    {/* Page content here */}
                    <Outlet></Outlet>
                    {children}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    {/* list only for admin */}
                    {
                        (userrole === 'admin') &&
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li onClick={() => setClicked(1)}><Link to='/dboard/dbmain'> <span className={`text-2xl font-bold m-5 ${clicked === 1 ? 'text-black' : 'text-slate-500'}`}> Dashboard </span> </Link></li>
                            <li onClick={() => setClicked(2)}><Link to='/dboard/allusers'> <span className={`text-2xl font-bold m-5 ${clicked === 2 ? 'text-black' : 'text-slate-500'}`}> All Users </span> </Link></li>
                            <li onClick={() => setClicked(3)}><Link to='/dboard/addadoctor'> <span className={`text-2xl font-bold m-5 ${clicked === 3 ? 'text-black' : 'text-slate-500'}`}> Add a Doctor </span> </Link></li>
                            <li onClick={() => setClicked(4)}><Link to='/dboard/managedoctors'> <span className={`text-2xl font-bold m-5 ${clicked === 4 ? 'text-black' : 'text-slate-500'}`}> Manage Doctors </span> </Link></li>
                            <li><Link to='/'> <span className='text-2xl font-bold text-slate-500 m-5'> Home </span></Link></li>
                        </ul>
                    }
                    {/* list only for user */}

                    {
                        (userrole === 'user') &&
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li onClick={() => setUserClicked(1)}><Link to='/dboard/myappointments'> <span className={`text-2xl font-bold m-5 ${userClicked === 1 ? 'text-black' : 'text-slate-500'}`}> My Appointments </span> </Link></li>
                            <li onClick={() => setUserClicked(2)}><Link to='/dboard/myreviews'> <span className={`text-2xl font-bold m-5 ${userClicked === 2 ? 'text-black' : 'text-slate-500'}`}> My Reviews </span> </Link></li>
                            <li onClick={() => setUserClicked(3)}><Link to='/dboard/myhistory'> <span className={`text-2xl font-bold m-5 ${userClicked === 3 ? 'text-black' : 'text-slate-500'}`}> My History </span> </Link></li>
                            <li><Link to='/'> <span className='text-2xl font-bold text-slate-500 m-5'> Home </span></Link></li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;