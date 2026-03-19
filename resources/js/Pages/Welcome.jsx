import React from 'react';
import { Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                {/* Header */}
                <header className="bg-white shadow-sm dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo & Nama Aplikasi */}
                            <div className="flex items-center">
                                <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                                    HotelKu
                                </span>
                            </div>

                            {/* Navigasi */}
                            <nav>
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600"
                                    >
                                        Masuk ke Dashboard
                                    </Link>
                                ) : (
                                    <Link
                                        href={route('login')}
                                        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Login Admin
                                    </Link>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                <main>
                    {/* Hero Section */}
                    <section className="relative bg-white dark:bg-gray-800 overflow-hidden">
                        <div className="max-w-7xl mx-auto">
                            <div className="relative z-10 pb-8 bg-white dark:bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                                <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                                    <polygon points="50,0 100,0 50,100 0,100" />
                                </svg>
                                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                        <div className="sm:text-center lg:text-left">
                                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                                                <span className="block">Sistem Manajemen</span>
                                                <span className="block text-indigo-600 dark:text-indigo-400">Hotel Terpadu</span>
                                            </h1>
                                            <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                                Pantau pemesanan, kelola kamar, dan analisis kinerja bisnis hotel Anda dari satu dashboard yang powerful dan mudah digunakan.
                                            </p>
                                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                                <div className="rounded-md shadow">
                                                    <Link
                                                        href={route('login')}
                                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        Masuk ke Dashboard
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </div>
                        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop" alt="Hotel dashboard illustration" />
                        </div>
                    </section>

                    {/* Fitur Unggulan */}
                    <section className="py-12 bg-gray-50 dark:bg-gray-900">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">Fitur Kami</h2>
                                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                    Semua yang Anda Butuhkan untuk Mengelola Hotel
                                </p>
                            </div>

                            <div className="mt-10">
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                    {/* Fitur 1 */}
                                    <div className="pt-6">
                                        <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8">
                                            <div className="-mt-6">
                                                <div>
                                                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                    </span>
                                                </div>
                                                <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Manajemen Pemesanan</h3>
                                                <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                                                    Lihat, konfirmasi, dan kelola semua pemesanan secara real-time.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fitur 2 */}
                                    <div className="pt-6">
                                        <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8">
                                            <div className="-mt-6">
                                                <div>
                                                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                                    </span>
                                                </div>
                                                <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Manajemen Kamar</h3>
                                                <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                                                    Perbarui status kamar, atur tarif, dan kelola tipe kamar dengan mudah.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fitur 3 */}
                                    <div className="pt-6">
                                        <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8">
                                            <div className="-mt-6">
                                                <div>
                                                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                                                    </span>
                                                </div>
                                                <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Laporan & Analitik</h3>
                                                <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                                                    Dapatkan wawasan mendalam tentang pendapatan, okupansi, dan tren tamu.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fitur 4 */}
                                    <div className="pt-6">
                                        <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8">
                                            <div className="-mt-6">
                                                <div>
                                                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                                    </span>
                                                </div>
                                                <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Manajemen Tamu</h3>
                                                <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                                                    Akses database tamu, lihat riwayat menginap, dan kelola preferensi mereka.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Preview Dashboard */}
                    <section className="bg-white dark:bg-gray-800">
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                            <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                                <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                                    <div className="lg:self-center">
                                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                            <span className="block">Dashboard yang Intuitif</span>
                                        </h2>
                                        <p className="mt-4 text-lg leading-6 text-indigo-200">
                                            Antarmuka yang bersih dan mudah dipahami memungkinkan Anda untuk fokus pada yang terpenting: menjalankan bisnis hotel Anda.
                                        </p>
                                        <Link
                                            href={route('login')}
                                            className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                                        >
                                            Lihat Demo Dashboard
                                        </Link>
                                    </div>
                                </div>
                                <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                                    <img className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="App screenshot" />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-white dark:bg-gray-800 mt-12">
                    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-base text-gray-500 dark:text-gray-400">
                            &copy; 2024 HotelKu. Sistem Manajemen Hotel.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
