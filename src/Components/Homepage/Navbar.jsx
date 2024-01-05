import { NavLink } from 'react-router-dom'
import navicon from '../../assets/Navicon.svg'
export default function Navbar() {
    const Navmenu = <>
        <li><a>Home</a></li>
        <li>
            <details>
                <summary>About</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><NavLink to={"/appointment"}>Appointment</NavLink></li>
    </>
    return (
        <div className="navbar bg-[#07332F] fixed top-0 bg-opacity-40 z-20 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Navmenu}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src={navicon} alt="" /> Easy-Med</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navmenu}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-accent">Login</a>
            </div>
        </div>
    )
}