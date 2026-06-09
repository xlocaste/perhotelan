import React from "react";
import Navbar from "./_components/Navbar";

const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(angka);
};

const getStatusBadge = (status) => {
    switch (status) {
        case "tersedia":
            return "bg-green-100 text-green-800";
        case "terisi":
            return "bg-red-100 text-red-800";
        case "maintenance":
            return "bg-yellow-100 text-yellow-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
};

const Dashboard = ({ Kamar }) => {
    const kamarList = Array.isArray(Kamar) ? Kamar : Object.values(Kamar || {});

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Dashboard */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Dashboard
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                        Selamat datang! Berikut adalah daftar kamar hotel Anda.
                    </p>
                </div>

                {/* Grid Card Kamar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {kamarList.map((kamar) => (
                        <div
                            key={kamar.id}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col"
                        >
                            {/* Bagian Atas Card (Header) */}
                            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-indigo-100 p-2 rounded-lg">
                                        <svg
                                            className="w-6 h-6 text-indigo-600"
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
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Kamar {kamar.nomor_kamar}
                                    </h3>
                                </div>
                                <span
                                    className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${getStatusBadge(kamar.status)}`}
                                >
                                    {kamar.status}
                                </span>
                            </div>

                            {/* Bagian Tengah Card (Detail) */}
                            <div className="p-5 flex-1 flex flex-col space-y-4">
                                <div>
                                    <p className="text-sm font-semibold text-indigo-600">
                                        {kamar.jenis_kamar?.nama ||
                                            "Tipe tidak tersedia"}
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">
                                        {formatRupiah(
                                            kamar.jenis_kamar?.harga || 0,
                                        )}
                                        <span className="text-sm font-normal text-gray-500">
                                            {" "}
                                            /malam
                                        </span>
                                    </p>
                                </div>

                                {/* Fasilitas */}
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-2">
                                        Fasilitas:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {kamar.jenis_kamar?.fasilitas ? (
                                            kamar.jenis_kamar.fasilitas
                                                .split(", ")
                                                .map((f, i) => (
                                                    <span
                                                        key={i}
                                                        className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium"
                                                    >
                                                        {f}
                                                    </span>
                                                ))
                                        ) : (
                                            <span className="text-xs text-gray-400">
                                                Tidak ada data
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Bagian Bawah Card (Harga Breakfast) */}
                            <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                                <div className="flex items-center text-sm text-gray-600">
                                    <svg
                                        className="w-4 h-4 mr-1.5 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Tambah breakfast:{" "}
                                    <span className="font-semibold ml-1">
                                        {formatRupiah(
                                            kamar.jenis_kamar
                                                ?.harga_breakfast || 0,
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
