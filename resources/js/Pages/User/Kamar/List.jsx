import React from "react";
import Navbar from "../_components/Navbar";
import { usePage, Link } from "@inertiajs/react";

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
            return "bg-green-50 text-green-700 border-green-200";
        case "terisi":
            return "bg-red-50 text-red-700 border-red-200";
        case "maintenance":
            return "bg-yellow-50 text-yellow-700 border-yellow-200";
        default:
            return "bg-gray-50 text-gray-700 border-gray-200";
    }
};

const List = ({ Kamar = [] }) => {
    const { auth } = usePage().props;

    const isFrontOffice = auth?.role?.includes("front office");
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Daftar Kamar
                        </h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Informasi seluruh kamar yang tersedia di hotel.
                        </p>
                    </div>
                    <Link
                        href={route("user.kamar.create")}
                        className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150 shadow-sm"
                    >
                        Booking Kamar
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Kamar.length > 0 ? (
                        Kamar.map((kamar) => (
                            <div
                                key={kamar.id}
                                className="bg-white flex flex-col rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-indigo-50 p-2.5 rounded-lg border border-indigo-100">
                                            <svg
                                                className="w-6 h-6 text-indigo-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                />
                                            </svg>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">
                                                Kamar {kamar.nomor_kamar}
                                            </h3>
                                            <p className="text-xs font-medium text-indigo-600">
                                                {kamar.jenis_kamar?.kode}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-bold capitalize tracking-wide shadow-sm border ${getStatusBadge(kamar.status)}`}
                                    >
                                        {kamar.status}
                                    </span>
                                </div>

                                <div className="p-5 flex-1 space-y-4">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                            {kamar.jenis_kamar?.nama}
                                        </p>

                                        <div className="flex items-baseline gap-1 mt-1">
                                            <p className="text-2xl font-bold text-gray-900">
                                                {formatRupiah(
                                                    kamar.jenis_kamar?.harga ||
                                                        0,
                                                )}
                                            </p>
                                            <p className="text-sm text-gray-500 font-medium">
                                                / malam
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                            Fasilitas
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {kamar.jenis_kamar?.fasilitas
                                                ?.split(",")
                                                .map((item, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-md text-xs font-medium"
                                                    >
                                                        {item.trim()}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 flex flex-col gap-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 font-medium">
                                            Breakfast
                                        </span>
                                        <span className="font-bold text-gray-900">
                                            {formatRupiah(
                                                kamar.jenis_kamar
                                                    ?.harga_breakfast || 0,
                                            )}
                                        </span>
                                    </div>

                                    {isFrontOffice &&
                                        (kamar.status === "tersedia" ? (
                                            <Link
                                                href={route(
                                                    "user.reservasi.create",
                                                    kamar.id,
                                                )}
                                                className="w-full flex justify-center items-center rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white uppercase tracking-widest hover:bg-indigo-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
                                            >
                                                Pesan Sekarang
                                            </Link>
                                        ) : (
                                            <button
                                                disabled
                                                className="w-full flex justify-center items-center rounded-md bg-gray-100 px-4 py-2.5 text-sm font-bold text-gray-400 uppercase tracking-widest border border-gray-200 cursor-not-allowed"
                                            >
                                                Tidak Tersedia
                                            </button>
                                        ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                            <div className="flex justify-center mb-4">
                                <svg
                                    className="w-12 h-12 text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">
                                Tidak ada kamar
                            </h3>
                            <p className="mt-1 text-gray-500">
                                Belum ada data kamar yang tersedia saat ini.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default List;
