import React, { useState, useEffect, useRef } from "react";
import { Link, usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

const Navbar = ({ onMenuClick }) => {
    const { auth } = usePage().props;
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const user = auth?.user;
    const isFrontOffice = auth?.role?.includes('front office');

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    console.log(auth)


    return (
        <div className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:px-8">
            <div className="flex items-center">
                {onMenuClick && (
                    <button
                        onClick={onMenuClick}
                        className="mr-2 rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 lg:hidden"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                )}

                <div className="flex items-center">
                    <svg
                        className="h-8 w-8 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                    </svg>
                    <Link
                        href="/user/dashboard"
                        className="ml-3 text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                        HotelKu
                    </Link>
                </div>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
                {isFrontOffice && (
                <NavLink
                    href={route("user.tamu")}
                    active={route().current("user.tamu")}
                    className="flex gap-2 items-center"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                    Tamu
                </NavLink>
                )}
                <NavLink
                    href={route("user.kamar.list")}
                    active={route().current("user.kamar.list")}
                    className="flex gap-2 items-center"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                    Kamar
                </NavLink>
                <NavLink
                    href={route("user.reservasi.indexUser")}
                    active={route().current("user.reservasi.indexUser")}
                    className="flex gap-2 items-center"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                    Kamar
                </NavLink>
            </div>

            {user && (
                <div className="flex items-center gap-2" ref={dropdownRef}>
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0">
                            <span className="text-indigo-700 font-semibold">
                                {user.name.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <span className="hidden sm:block truncate">
                            {user.name}
                        </span>
                        <svg
                            className={`h-4 w-4 ml-1 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    <div
                        className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out z-50 ${
                            showDropdown
                                ? "opacity-100 translate-y-0 visible"
                                : "opacity-0 -translate-y-2 invisible"
                        }`}
                        style={{ top: '100%' }}
                    >
                        <div className="py-1">
                            <Link
                                href={route("profile.edit")}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <svg
                                    className="w-5 h-5 mr-2 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                Profil Saya
                            </Link>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <svg
                                    className="w-5 h-5 mr-2 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    />
                                </svg>
                                Keluar
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
