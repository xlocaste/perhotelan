import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && sidebarOpen) {
                setSidebarOpen(false);
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [sidebarOpen]);

    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [sidebarOpen]);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                >
                    <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                </div>
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out flex flex-col ${
                    sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                }`}
            >
                <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6 flex-shrink-0">
                    <Link
                        href="/"
                        className="text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                        HotelKu
                    </Link>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col space-y-1">
                    <NavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        className="flex gap-2 items-center"
                    >
                        <svg
                            className="w-6 h-6 flex-shrink-0"
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
                        Dashboard
                    </NavLink>
                    <NavLink
                        href={route("tamu.index")}
                        active={route().current("tamu.index")}
                        className="flex gap-2 items-center"
                    >
                        <svg
                            className="w-6 h-6 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        Tamu
                    </NavLink>
                    <NavLink
                        href={route("jenis-kamar.index")}
                        active={route().current("jenis-kamar.index")}
                        className="flex gap-2 items-center"
                    >
                        <svg
                            className="w-6 h-6 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                        </svg>
                        Jenis Kamar
                    </NavLink>
                    <NavLink
                        href={route("kamar.index")}
                        active={route().current("kamar.index")}
                        className="flex gap-2 items-center"
                    >
                        <svg
                            className="w-6 h-6 flex-shrink-0"
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
                </nav>
                <div className="border-t border-gray-200 p-4 flex-shrink-0 bg-white relative">
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <span className="flex items-center min-w-0">
                            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="text-indigo-700 font-semibold">
                                    {user.name.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <span className="truncate">{user.name}</span>
                        </span>
                        <svg
                            className={`h-4 w-4 flex-shrink-0 ml-2 transition-transform ${showDropdown ? "rotate-180" : ""}`}
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
                        className={`overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${showDropdown ? "opacity-100 translate-y-0 max-h-40" : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}`}
                    >
                        <div className="flex flex-col mt-2 space-y-1">
                            <Link
                                href={route("profile.edit")}
                                className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
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
                                className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
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
                    <div className="mt-3 px-3 text-xs text-gray-500 truncate">
                        {user.email}
                    </div>
                </div>
            </aside>

            <div className="flex flex-1 flex-col overflow-hidden lg:ml-64">
                <div className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm lg:hidden">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
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
                    <div className="text-lg font-semibold text-gray-800">
                        HotelKu
                    </div>
                    <div className="w-10"></div>
                </div>

                {header && (
                    <header className="bg-white shadow-sm">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main className="flex-1 overflow-y-auto p-6">{children}</main>
            </div>
        </div>
    );
}
