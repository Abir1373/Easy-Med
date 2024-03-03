import { Link, NavLink } from 'react-router-dom'
import navicon from '../../assets/Navicon.svg'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import { FaCircleUser } from "react-icons/fa6";

export default function Navbar() {
    const { user, logOut } = useContext(AuthContext)
    if (!user) {
        <span className="loading loading-spinner text-error"></span>
    }
    console.log(user)
    const LOGOUT = () => {
        logOut()
    }

    const Navmenu = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/appointment"}>Appointment</NavLink></li>
        <li><NavLink to={"/doctors"}>Doctors</NavLink></li>
        <li><NavLink to={"/dboard"}>Dashboard</NavLink></li>
    </>
    return (
        <div className="navbar bg-[#07332F] fixed top-0 bg-opacity-40 z-20 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-500">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                        <li><NavLink to={"/appointment"}>Appointment</NavLink></li>
                        <li><NavLink to={"/doctors"}>Doctors</NavLink></li>
                        {user && <li><NavLink to={"/dboard"}>Dashboard</NavLink></li>}
                    </ul>
                </div>
                <Link to={`/`} className="btn btn-ghost text-xl"><img src={navicon} alt="" /> Easy-Med</Link>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navmenu}
                </ul>
            </div> */}
            <div className="navbar-end">
                <div className='hidden lg:flex'>
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                        <li><NavLink to={"/appointment"}>Appointment</NavLink></li>
                        <li><NavLink to={"/doctors"}>Doctors</NavLink></li>
                        {user && <li><NavLink to={"/dboard"}>Dashboard</NavLink></li>}
                    </ul>
                </div>
                {
                    user === null ? <NavLink to={"/login"} className="btn btn-accent">Login</NavLink> :
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user.photoURL ? <img alt="Tailwind CSS Navbar component" src={user.photoURL} /> : <div className='text-3xl p-1'><FaCircleUser /></div>
                                    }
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
                                <li>
                                    <Link to={`/dboard`} className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to='/dboard'>Settings</Link></li>
                                <li><a onClick={LOGOUT}>Logout</a></li>
                            </ul>
                        </div>
                }


            </div>

        </div>
    )
}
