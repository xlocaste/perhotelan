import React from "react";
import Navbar from "../_components/Navbar";
import { Link, usePage } from "@inertiajs/react";

const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
        case "pending":
            return "bg-amber-50 text-amber-700 ring-amber-200";
        case "confirmed":
        case "aktif":
            return "bg-emerald-50 text-emerald-700 ring-emerald-200";
        case "selesai":
            return "bg-indigo-50 text-indigo-700 ring-indigo-200";
        case "batal":
        case "cancelled":
            return "bg-rose-50 text-rose-700 ring-rose-200";
        default:
            return "bg-slate-50 text-slate-700 ring-slate-200";
    }
};

const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(date);
};

const formatRupiah = (angka) => {
    if (!angka && angka !== 0) return "-";
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(angka);
};

const List = ({ Reservasi = [] }) => {
    const { auth } = usePage().props;
    const isFrontOffice = auth?.role?.includes("front office");

    const reservations = Array.isArray(Reservasi)
        ? Reservasi
        : Reservasi.data || [];

    console.log("reservasi", reservations);

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                            Daftar Reservasi
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            {isFrontOffice
                                ? "Kelola seluruh data reservasi kamar hotel."
                                : "Riwayat reservasi kamar Anda."}
                        </p>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50/80">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider max-w-[100px]"
                                    >
                                        ID
                                    </th>
                                    {isFrontOffice && (
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                                        >
                                            Tamu
                                        </th>
                                    )}
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        Kamar
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        Check In
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        Check Out
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 whitespace-nowrap">
                                {reservations.length > 0 ? (
                                    reservations.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-slate-50/80 transition-colors"
                                        >
                                            <td className="px-6 py-4 text-sm font-medium text-slate-900 max-w-[100px] truncate">
                                                <span className="text-slate-400">
                                                    #
                                                </span>
                                                {item.id}
                                            </td>
                                            {isFrontOffice && (
                                                <td className="px-6 py-4 text-sm text-slate-600 font-semibold">
                                                    {item.tamu?.user?.name ||
                                                        "-"}
                                                </td>
                                            )}
                                            <td className="px-6 py-4 text-sm text-slate-600">
                                                <div className="flex items-center gap-2">
                                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-xs ring-1 ring-indigo-100 shadow-sm">
                                                        {
                                                            item.kamar
                                                                ?.nomor_kamar
                                                        }
                                                    </span>
                                                    <span className="font-semibold text-slate-800 text-xs">
                                                        {
                                                            item.kamar
                                                                ?.jenis_kamar
                                                                ?.nama
                                                        }
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                                {formatDate(item.check_in)}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                                {formatDate(item.check_out)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`px-3 py-1.5 inline-flex text-xs leading-5 font-bold rounded-full ring-1 ring-inset shadow-sm tracking-wide capitalize ${getStatusBadge(item.status)}`}
                                                >
                                                    {item.status || "Pending"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link
                                                    href={route(
                                                        "user.reservasi.editUser",
                                                        item.id,
                                                    )}
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-indigo-600 text-sm font-semibold rounded-lg hover:bg-slate-50 ring-1 ring-inset ring-slate-200 shadow-sm transition-all"
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
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                        />
                                                    </svg>
                                                    Edit
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={isFrontOffice ? 7 : 6}
                                            className="px-6 py-16 text-center"
                                        >
                                            <div className="flex flex-col items-center justify-center text-slate-400">
                                                <svg
                                                    className="w-16 h-16 mb-4 text-slate-300"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                                    />
                                                </svg>
                                                <h3 className="text-lg font-medium text-slate-900">
                                                    Tidak ada reservasi
                                                </h3>
                                                <p className="mt-1 text-sm text-slate-500">
                                                    Belum ada data riwayat
                                                    reservasi saat ini.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
