import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";

export default function AuthenticatedLayout({ header, children }) {
    const { auth } = usePage().props;
    const user = auth.user;
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

    const navigation = [
        {
            name: "Dashboard",
            href: route("dashboard"),
            active: route().current("dashboard"),
            icon: (
                <svg
                    className="w-5 h-5 flex-shrink-0"
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
            ),
        },
        {
            name: "Tamu",
            href: route("tamu.index"),
            active: route().current("tamu.index"),
            icon: (
                <svg
                    className="w-5 h-5 flex-shrink-0"
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
            ),
        },
        {
            name: "Jenis Kamar",
            href: route("jenis-kamar.index"),
            active: route().current("jenis-kamar.index"),
            icon: (
                <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h6l8 8-10 10-8-8V7a4 4 0 014-4z"
                    />
                </svg>
            ),
        },
        {
            name: "Kamar",
            href: route("kamar.index"),
            active: route().current("kamar.index"),
            icon: (
                <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18v8a1 1 0 01-1 1h-1v-3H5v3H4a1 1 0 01-1-1v-8zm2 0V7a2 2 0 012-2h3a2 2 0 012 2v3"
                    />
                </svg>
            ),
        },
        {
            name: "Reservasi",
            href: route("reservasi.index"),
            active: route().current("reservasi.index"),
            icon: (
                <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
        {
            name: "Transaksi",
            href: route("transaksi.index"),
            active: route().current("transaksi.index"),
            icon: (
                <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a5 5 0 00-10 0v2M5 9h14l-1 10H6L5 9z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex font-sans">
            {/* Mobile overlays */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden transition-opacity bg-slate-900/40 backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-gradient-to-b from-white to-slate-200 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-transform duration-300 ease-in-out flex flex-col border-r border-slate-200/60 ${
                    sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                }`}
            >
                {/* Logo area */}
                <div className="flex h-20 items-center justify-between px-6 flex-shrink-0 border-b border-slate-200/60 bg-white/40 backdrop-blur-md">
                    <Link
                        href="/"
                        className="flex items-center gap-3 transition-transform hover:scale-105"
                    >
                        <div className="bg-gradient-to-tr from-indigo-500 to-indigo-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-slate-800 tracking-tight">
                            Hotel<span className="text-indigo-600">Ku</span>
                        </span>
                    </Link>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden rounded-lg p-2 text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-sm transition-all focus:outline-none"
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

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-6 px-4 stylish-scrollbar">
                    <div className="mb-4 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Menu Utama
                    </div>
                    <nav className="space-y-1.5 border-b border-slate-200/60 pb-6 mb-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition-all duration-200 group relative ${
                                    item.active
                                        ? "bg-white text-indigo-700 font-semibold shadow-sm ring-1 ring-slate-200/50"
                                        : "text-slate-600 hover:text-indigo-600 hover:bg-white/60"
                                }`}
                            >
                                {item.active && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-600 rounded-r-full shadow-[0_0_8px_rgba(79,70,229,0.4)]"></div>
                                )}
                                <span
                                    className={`${item.active ? "text-indigo-600" : "text-slate-400 group-hover:text-indigo-500"} transition-colors`}
                                >
                                    {item.icon}
                                </span>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Profile Section */}
                <div className="border-t border-slate-200/60 bg-white/30 backdrop-blur-sm p-4 shrink-0 relative">
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-white/60 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/30 group"
                    >
                        <div className="flex items-center gap-3 overflow-hidden">
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-sm ring-2 ring-white group-hover:shadow-md transition-all">
                                <span className="text-white font-bold text-sm">
                                    {user.name.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <div className="flex flex-col flex-1 min-w-0 text-left">
                                <span className="text-slate-700 font-semibold truncate group-hover:text-indigo-700 transition-colors">
                                    {user.name}
                                </span>
                                <span className="text-xs text-slate-500 truncate">
                                    {user.email}
                                </span>
                            </div>
                        </div>
                        <svg
                            className={`h-5 w-5 text-slate-400 flex-shrink-0 ml-2 transition-transform duration-300 ${showDropdown ? "rotate-180 text-indigo-600" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                            />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div
                        className={`absolute bottom-full left-4 right-4 mb-2 overflow-hidden rounded-xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out transform origin-bottom ${
                            showDropdown
                                ? "opacity-100 translate-y-0 visible"
                                : "opacity-0 translate-y-2 invisible"
                        }`}
                    >
                        <div className="p-1.5 flex flex-col space-y-0.5">
                            <Link
                                href={route("profile.edit")}
                                className="flex items-center gap-2.5 px-3 py-2 text-sm text-slate-600 font-medium rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                            >
                                <svg
                                    className="w-4 h-4 text-slate-400"
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
                            <div className="h-px bg-slate-100 my-1 mx-2"></div>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-red-600 font-medium rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors"
                            >
                                <svg
                                    className="w-4 h-4"
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
            </aside>

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col overflow-hidden lg:pl-72 transition-all duration-300">
                {/* Mobile Header */}
                <div className="sticky top-0 z-30 flex h-16 items-center flex-shrink-0 justify-between border-b border-gray-200/60 bg-white/80 backdrop-blur-md px-4 shadow-sm lg:hidden">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-lg p-2 transition-colors"
                    >
                        <span className="sr-only">Open sidebar</span>
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
                    <div className="text-xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
                        Hotel<span className="text-indigo-600">Ku</span>
                    </div>
                    <div className="w-10"></div>
                </div>

                {/* Page Header (if exists) */}
                {header && (
                    <header className="bg-white border-b border-gray-100 shadow-sm/50">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-50/50">
                    {children}
                </main>
            </div>

            <style jsx="true">{`
                .stylish-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .stylish-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .stylish-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(0, 0, 0, 0.1);
                    border-radius: 10px;
                }
                .stylish-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: rgba(0, 0, 0, 0.15);
                }
            `}</style>
        </div>
    );
}
