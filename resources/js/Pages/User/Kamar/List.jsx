import React from "react";
import Navbar from "../_components/Navbar";
import NavLink from "@/Components/NavLink";

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

const List = ({ Kamar = [] }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Daftar Kamar
                        </h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Informasi seluruh kamar yang tersedia di hotel.
                        </p>
                    </div>
                    <NavLink
                        href={route("user.kamar.create")}
                        active={route().current("user.kamar.create")}
                        className="flex gap-2 items-center"
                    >
                        <p>booking</p>
                    </NavLink>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Kamar.length > 0 ? (
                        Kamar.map((kamar) => (
                            <div
                                key={kamar.id}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                            >
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

                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">
                                                Kamar {kamar.nomor_kamar}
                                            </h3>
                                            <p className="text-xs text-gray-500">
                                                {kamar.jenis_kamar?.kode}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${getStatusBadge(kamar.status)}`}
                                    >
                                        {kamar.status}
                                    </span>
                                </div>

                                <div className="p-5 space-y-4">
                                    <div>
                                        <p className="text-sm font-semibold text-indigo-600">
                                            {kamar.jenis_kamar?.nama}
                                        </p>

                                        <p className="text-2xl font-bold text-gray-900 mt-1">
                                            {formatRupiah(
                                                kamar.jenis_kamar?.harga || 0
                                            )}
                                        </p>

                                        <p className="text-xs text-gray-500">
                                            per malam
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium text-gray-500 mb-2">
                                            Fasilitas
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {kamar.jenis_kamar?.fasilitas
                                                ?.split(",")
                                                .map((item, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                                    >
                                                        {item.trim()}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">
                                            Breakfast
                                        </span>

                                        <span className="font-semibold">
                                            {formatRupiah(
                                                kamar.jenis_kamar
                                                    ?.harga_breakfast || 0
                                            )}
                                        </span>
                                    </div>
                                    {kamar.status === "tersedia" ? (
                                        <NavLink
                                            href={route("user.kamar.edit", kamar.id)}
                                            className="w-full flex justify-center items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
                                        >
                                            Pesan Sekarang
                                        </NavLink>
                                    ) : (
                                        <button
                                            disabled
                                            className="w-full rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-500 cursor-not-allowed"
                                        >
                                            Tidak Tersedia
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full bg-white rounded-lg shadow p-8 text-center text-gray-500">
                            Tidak ada data kamar tersedia.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default List;
