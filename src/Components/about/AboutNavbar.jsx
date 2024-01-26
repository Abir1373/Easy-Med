import React from 'react';
import { Link } from 'react-router-dom';

const AboutNavbar = () => {
    return (
        <div className="navbar bg-neutral-200 h-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='' className='text-2xl'>Home</Link></li>
                        <li>
                            <Link to='' className='text-2xl'>Fruits</Link>
                            <ul className="p-2">
                                <li><Link to='' className='text-2xl'>Submenu 1</Link></li>
                                <li><Link to='' className='text-2xl'>Submenu 2</Link></li>
                            </ul>
                        </li>
                        <li><Link to='' className='text-2xl'>NutriCraze</Link></li>
                        <li>
                            <Link to='' className='text-2xl'>Activites</Link>
                            <ul className="p-2 text-2xl">
                                <li><Link to='' className='text-2xl'>Submenu 1</Link></li>
                                <li><Link to='' className='text-2xl'>Submenu 2</Link></li>
                            </ul>
                        </li>
                        <li><Link to='' className='text-2xl'>Identify Fruit</Link></li>
                        <li><Link to='' className='text-2xl'>Contact</Link></li>
                        <li>
                            <Link to='' className='text-2xl'>Users?</Link>
                            <ul className="p-2">
                                <li><Link to='' className='text-2xl'>Submenu 1</Link></li>
                                <li><Link to='' className='text-2xl'>Submenu 2</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link to='' className="btn btn-ghost text-2xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-2xl">
                    <li><Link to=''>Home</Link></li>
                    <li>
                        <details>
                            <summary>Fruits</summary>
                            <ul className="p-2">
                                <li><Link to=''>Submenu 1</Link></li>
                                <li><Link to=''>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to=''>NutriCraze</Link></li>
                    <li>
                        <details>
                            <summary>Activites</summary>
                            <ul className="p-2">
                                <li><Link to=''>Submenu 1</Link></li>
                                <li><Link to=''>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to=''>Identify Fruit</Link></li>
                    <li><Link to=''>Contact</Link></li>
                    <li>
                        <details>
                            <summary>Users?</summary>
                            <ul className="p-2">
                                <li><Link to=''>Submenu 1</Link></li>
                                <li><Link to=''>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutNavbar;