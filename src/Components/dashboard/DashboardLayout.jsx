import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import getSingleUser from '../../api/getSingleUser';
import { IoMdMenu } from "react-icons/io";

const DashboardLayout = ({ children }) => {
    const [clicked, setClicked] = useState(1);
    const [userClicked, setUserClicked] = useState(1);

    let [singleUserData] = getSingleUser()
    if (!singleUserData || singleUserData.length === 0) {
        return <span className="loading loading-spinner text-error"></span>
    }
    let userrole = singleUserData[0].user_role
    console.log(singleUserData)
    const navmenu = <>
        <ul className="menu menu-horizontal px-1 text-black">
            <li><Link to={``}>Home</Link></li>
            <li><Link to={``}>About</Link></li>
            <li><Link to={``}>Apppointment</Link></li>
            <li><Link to={``}>Review</Link></li>
            <li><Link to={``}>Contact us</Link></li>
            {/* <li><button className="btn text-center bg-[#F7A582] text-white ">logout</button></li> */}
        </ul>
    </>
    return (
        <div>
            {/* navbar */}

            {/* <div className="navbar bg-slate-500 w-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navmenu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-end">
                    <div className='hidden lg:flex'>
                        <ul className="menu menu-horizontal px-1">
                            {navmenu}
                        </ul>
                    </div>
                    <a className="btn">Logout</a>
                </div>
            </div> */}


            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {children}
                    {/* Page content here */}
                    <Outlet></Outlet>
                    {children}
                    <label htmlFor="my-drawer-2" className="btn btn-neutral drawer-button lg:hidden absolute left-0 top-0"><IoMdMenu width={100} /></label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    {/* list only for admin */}
                    {
                        (userrole === 'admin') &&
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li onClick={() => setClicked(1)}><Link to='/dboard/dbmain'> <span className={`text-xl font-bold m-5 ${clicked === 1 ? 'text-black' : 'text-slate-500'}`}> Dashboard </span> </Link></li>
                            <li onClick={() => setClicked(2)}><Link to='/dboard/allusers'> <span className={`text-xl font-bold m-5 ${clicked === 2 ? 'text-black' : 'text-slate-500'}`}> All Users </span> </Link></li>
                            <li onClick={() => setClicked(3)}><Link to='/dboard/addadoctor'> <span className={`text-xl font-bold m-5 ${clicked === 3 ? 'text-black' : 'text-slate-500'}`}> Add a Doctor </span> </Link></li>
                            <li onClick={() => setClicked(4)}><Link to='/dboard/managedoctors'> <span className={`text-xl font-bold m-5 ${clicked === 4 ? 'text-black' : 'text-slate-500'}`}> Manage Doctors </span> </Link></li>
                            <li><Link to='/'> <span className='text-xl font-bold text-slate-500 m-5'> Home </span></Link></li>
                        </ul>
                    }
                    {/* list only for user */}
                    {
                        (userrole === 'user') &&
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li onClick={() => setUserClicked(1)}><Link to='/dboard/myappointments'> <span className={`text-xl font-bold m-5 ${userClicked === 1 ? 'text-black' : 'text-slate-500'}`}> My Appointments </span> </Link></li>
                            <li onClick={() => setUserClicked(2)}><Link to='/dboard/myreviews'> <span className={`text-xl font-bold m-5 ${userClicked === 2 ? 'text-black' : 'text-slate-500'}`}> My Reviews </span> </Link></li>
                            <li onClick={() => setUserClicked(3)}><Link to='/dboard/myhistory'> <span className={`text-xl font-bold m-5 ${userClicked === 3 ? 'text-black' : 'text-slate-500'}`}> My History </span> </Link></li>
                            <li><Link to='/'> <span className='text-xl font-bold text-slate-500 m-5'> Home </span></Link></li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;