import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="h-[80px] shadow">
            <div className="px-[15px] py-6 mx-auto container md:px-0">
                <div className="relative flex items-center justify-between">
                    <Link
                        to="/"
                        aria-label="Online Basket"
                        title="Online Basket"
                        className="inline-flex items-center"
                    >
                        Online Basket
                    </Link>
                    <ul className="items-center hidden space-x-8 lg:flex">
                        <li>
                            <NavLink
                                to="/home"
                                aria-label="Our product"
                                title="Our product"
                                className={({ isActive }) =>
                                    isActive
                                    ? 'text-base font-bold tracking-wide text-theme-default transition-colors duration-200 hover:text-theme-default'
                                    : 'text-base font-bold tracking-wide text-theme-dark transition-colors duration-200 hover:text-theme-default'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                aria-label="About"
                                title="About"
                                className={({ isActive }) =>
                                    isActive
                                    ? 'text-base font-bold tracking-wide text-theme-default transition-colors duration-200 hover:text-theme-default'
                                    : 'text-base font-bold tracking-wide text-theme-dark transition-colors duration-200 hover:text-theme-default'
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                aria-label="Services"
                                title="Services"
                                className={({ isActive }) =>
                                    isActive
                                    ? 'text-base font-bold tracking-wide text-theme-default transition-colors duration-200 hover:text-theme-default'
                                    : 'text-base font-bold tracking-wide text-theme-dark transition-colors duration-200 hover:text-theme-default'
                                }
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/service/add"
                                aria-label="Service Add"
                                title="Service Add"
                                className={({ isActive }) =>
                                    isActive
                                    ? 'text-base font-bold tracking-wide text-theme-default transition-colors duration-200 hover:text-theme-default'
                                    : 'text-base font-bold tracking-wide text-theme-dark transition-colors duration-200 hover:text-theme-default'
                                }
                            >
                                Add Service
                            </NavLink>
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-themeWhite" viewBox="0 0 24 24">
                                <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full bg-themeBlue-40">
                            <div className="p-5 bg-white rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="Online Basket"
                                            title="Online Basket"
                                            className="inline-flex items-center"
                                        >
                                            Online Basket
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded text-themeWhite hover:text-themeOrange-10 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-themeWhite" viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                            />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <NavLink
                                            to="/home"
                                            aria-label="Home"
                                            title="Home"
                                            className={({ isActive }) =>
                                                isActive
                                                ? 'text-base font-bold tracking-wide text-theme-default transition-colors duration-200 hover:text-theme-default'
                                                : 'text-base font-bold tracking-wide text-theme-dark transition-colors duration-200 hover:text-theme-default'
                                            }
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                            to="/about"
                                            aria-label="About"
                                            title="About"
                                            className={({ isActive }) =>
                                                isActive
                                                ? 'text-base font-bold tracking-wide text-theme-default transition-colors duration-200 hover:text-theme-default'
                                                : 'text-base font-bold tracking-wide text-theme-dark transition-colors duration-200 hover:text-theme-default'
                                            }
                                            >
                                                About
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;