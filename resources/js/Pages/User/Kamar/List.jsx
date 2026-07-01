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
    switch (status?.toLowerCase()) {
        case "tersedia":
            return "bg-emerald-50 text-emerald-700 ring-emerald-200";
        case "terisi":
            return "bg-rose-50 text-rose-700 ring-rose-200";
        case "maintenance":
            return "bg-amber-50 text-amber-700 ring-amber-200";
        default:
            return "bg-slate-50 text-slate-700 ring-slate-200";
    }
};

const List = ({ Kamar = [] }) => {
    const { auth } = usePage().props;

    const isFrontOffice = auth?.role?.includes("front office");
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                            Daftar Kamar
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Informasi seluruh kamar yang tersedia di hotel.
                        </p>
                    </div>
                    {isFrontOffice && (
                        <Link
                            href={route("user.kamar.create")}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 hover:shadow-md transition-all ring-1 ring-indigo-700/50"
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
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                            Booking Kamar
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Kamar.length > 0 ? (
                        Kamar.map((kamar) => (
                            <div
                                key={kamar.id}
                                className="bg-white flex flex-col rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden hover:shadow-md hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
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
                                            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                                                Kamar {kamar.nomor_kamar}
                                            </h3>
                                            <p className="text-xs font-semibold text-indigo-600">
                                                {kamar.jenis_kamar?.kode}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide ring-1 ring-inset shadow-sm ${getStatusBadge(kamar.status)}`}
                                    >
                                        {kamar.status}
                                    </span>
                                </div>

                                <div className="p-5 flex-1 space-y-4">
                                    <div>
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                                            {kamar.jenis_kamar?.nama}
                                        </p>

                                        <div className="flex items-baseline gap-1 mt-1">
                                            <p className="text-2xl font-black text-slate-900 tracking-tight">
                                                {formatRupiah(
                                                    kamar.jenis_kamar?.harga ||
                                                        0,
                                                )}
                                            </p>
                                            <p className="text-sm text-slate-500 font-medium">
                                                / malam
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                                            Fasilitas
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {kamar.jenis_kamar?.fasilitas
                                                ?.split(",")
                                                .map((item, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm"
                                                    >
                                                        {item.trim()}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="px-5 py-4 bg-slate-50/80 border-t border-slate-100 flex flex-col gap-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-600 font-medium flex items-center gap-1.5">
                                            <svg
                                                className="w-4 h-4 text-emerald-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            Breakfast
                                        </span>
                                        <span className="font-bold text-slate-900">
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
                                                className="w-full flex justify-center items-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white uppercase tracking-widest hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
                                            >
                                                Pesan Sekarang
                                            </Link>
                                        ) : (
                                            <button
                                                disabled
                                                className="w-full flex justify-center items-center rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-400 uppercase tracking-widest border border-slate-200 cursor-not-allowed"
                                            >
                                                Tidak Tersedia
                                            </button>
                                        ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full bg-white rounded-2xl shadow-sm border border-slate-200/60 p-16 text-center">
                            <div className="flex justify-center mb-4 text-slate-300">
                                <svg
                                    className="w-16 h-16"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-slate-900">
                                Tidak ada kamar
                            </h3>
                            <p className="mt-1 text-sm text-slate-500">
                                Belum ada data kamar yang tersedia pada sistem
                                saat ini.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default List;
