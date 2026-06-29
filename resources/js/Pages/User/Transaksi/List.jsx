import React from "react";
import Navbar from "../_components/Navbar";
import { Link, usePage } from "@inertiajs/react";

const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
        case "lunas":
        case "paid":
        case "sukses":
        case "success":
            return "bg-green-50 text-green-700 border-green-200";
        case "belum_bayar":
        case "belum bayar":
        case "pending":
            return "bg-yellow-50 text-yellow-700 border-yellow-200";
        case "batal":
        case "failed":
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

const List = ({ Transaksi = [] }) => {
    const { auth } = usePage().props;
    const isFrontOffice = auth?.role?.includes("front office");

    // Handle whether Transaksi is array or paginated object from Laravel
    const transactions = Array.isArray(Transaksi)
        ? Transaksi
        : Transaksi.data || [];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Daftar Transaksi
                        </h1>
                        <p className="mt-1 text-sm text-gray-600">
                            {isFrontOffice
                                ? "Kelola informasi pembayaran seluruh reservasi."
                                : "Riwayat transaksi pembayaran Anda."}
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <Link
                            href={route("user.transaksi.createUser")}
                            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                            Tambah Transaksi
                        </Link>
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
                                        ID TRX
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
                                        No. Reservasi
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                    >
                                        Tanggal Bayar
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                    >
                                        Metode
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                    >
                                        Total
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                                {transactions.length > 0 ? (
                                    transactions.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 max-w-[100px] truncate">
                                                TRX-{item.id}
                                            </td>
                                            {isFrontOffice && (
                                                <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                                                    {item.reservasi?.tamu?.user
                                                        ?.name || "-"}
                                                </td>
                                            )}
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                <div className="font-semibold text-gray-900">
                                                    RES-{item.reservasi_id}
                                                </div>
                                                <div className="text-xs text-indigo-600">
                                                    {item.reservasi?.kamar
                                                        ?.nomor_kamar
                                                        ? `Kamar ${item.reservasi.kamar.nomor_kamar}`
                                                        : ""}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {formatDate(item.tanggal_bayar)}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.metode_pembayaran ? (
                                                    <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-semibold uppercase border border-gray-200 tracking-wider">
                                                        {item.metode_pembayaran}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400 text-sm">
                                                        -
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900">
                                                {formatRupiah(
                                                    item.total_harga || 0,
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border shadow-sm capitalize tracking-wide ${getStatusBadge(item.status_pembayaran)}`}
                                                >
                                                    {item.status_pembayaran?.replace(
                                                        "_",
                                                        " ",
                                                    ) || "Pending"}
                                                </span>
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
                                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <h3 className="text-lg font-medium text-gray-900">
                                                    Tidak ada transaksi
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Belum ada riwayat pembayaran
                                                    saat ini.
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
