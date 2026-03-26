import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left Side - Branding & Info */}
            <div className="hidden lg:flex lg:w-1/2 relative">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1974&auto=format&fit=crop"
                    alt="Hotel lobby"
                />
                <div className="absolute inset-0 bg-indigo-900 bg-opacity-75"></div>
                <div className="relative z-10 flex flex-col justify-center px-12 text-white">
                    <div className="flex items-center mb-8">
                        <svg
                            className="h-10 w-10 text-white mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            ></path>
                        </svg>
                        <span className="text-3xl font-bold">HotelKu</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">
                        Selamat Datang Kembali
                    </h2>
                    <p className="text-lg text-indigo-100">
                        Masuk ke dashboard Anda untuk mengelola operasional
                        hotel dan memantau kinerja bisnis secara real-time.
                    </p>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm">
                    {/* Logo for mobile view */}
                    <div className="lg:hidden text-center mb-8">
                        <Link href="/">
                            <div className="flex items-center justify-center">
                                <svg
                                    className="h-10 w-10 text-indigo-600 mr-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    ></path>
                                </svg>
                                <span className="text-2xl font-bold text-gray-900">
                                    HotelKu
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* The actual form content will be rendered here */}
                    {children}
                </div>
            </div>
        </div>
    );
}
