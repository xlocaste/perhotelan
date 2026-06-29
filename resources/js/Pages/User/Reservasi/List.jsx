import React from "react";
import Navbar from "../_components/Navbar";
import { Link, usePage } from "@inertiajs/react";

const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
        case "pending":
            return "bg-yellow-50 text-yellow-700 border-yellow-200";
        case "confirmed":
        case "aktif":
            return "bg-green-50 text-green-700 border-green-200";
        case "selesai":
            return "bg-blue-50 text-blue-700 border-blue-200";
        case "batal":
        case "cancelled":
            return "bg-red-50 text-red-700 border-red-200";
        default:
            return "bg-gray-50 text-gray-700 border-gray-200";
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
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Daftar Reservasi
                        </h1>
                        <p className="mt-1 text-sm text-gray-600">
                            {isFrontOffice
                                ? "Kelola seluruh data reservasi kamar hotel."
                                : "Riwayat reservasi kamar Anda."}
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider max-w-[100px]"
                                    >
                                        ID
                                    </th>
                                    {isFrontOffice && (
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                        >
                                            Tamu
                                        </th>
                                    )}
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                    >
                                        Kamar
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                    >
                                        Check In
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                    >
                                        Check Out
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                                {reservations.length > 0 ? (
                                    reservations.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 max-w-[100px] truncate">
                                                #{item.id}
                                            </td>
                                            {isFrontOffice && (
                                                <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                                                    {item.tamu?.user?.name ||
                                                        "-"}
                                                </td>
                                            )}
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                <div className="font-semibold text-gray-900">
                                                    Kamar{" "}
                                                    {item.kamar?.nomor_kamar}
                                                </div>
                                                <div className="text-xs text-indigo-600">
                                                    {
                                                        item.kamar?.jenis_kamar
                                                            ?.nama
                                                    }
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {formatDate(item.check_in)}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {formatDate(item.check_out)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border shadow-sm capitalize tracking-wide ${getStatusBadge(item.status)}`}
                                                >
                                                    {item.status || "Pending"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link
                                                    href={route("user.reservasi.editUser", item.id)}
                                                    className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700"
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={isFrontOffice ? 7 : 6}
                                            className="px-6 py-12 text-center text-gray-500"
                                        >
                                            <div className="flex flex-col items-center justify-center">
                                                <svg
                                                    className="w-12 h-12 text-gray-300 mb-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                                    />
                                                </svg>
                                                <h3 className="text-lg font-medium text-gray-900">
                                                    Tidak ada reservasi
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">
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
