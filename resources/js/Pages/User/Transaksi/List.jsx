import React from "react";
import Navbar from "../_components/Navbar";
import { Link, usePage } from "@inertiajs/react";

const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
        case "lunas":
        case "paid":
        case "sukses":
        case "success":
            return "bg-emerald-50 text-emerald-700 ring-emerald-200";
        case "belum_bayar":
        case "belum bayar":
        case "pending":
            return "bg-amber-50 text-amber-700 ring-amber-200";
        case "batal":
        case "failed":
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

const List = ({ Transaksi = [] }) => {
    const { auth } = usePage().props;
    const isFrontOffice = auth?.role?.includes("front office");

    // Handle whether Transaksi is array or paginated object from Laravel
    const transactions = Array.isArray(Transaksi)
        ? Transaksi
        : Transaksi.data || [];

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                            Daftar Transaksi
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            {isFrontOffice
                                ? "Kelola informasi pembayaran seluruh reservasi hotel."
                                : "Riwayat transaksi pembayaran reservasi Anda."}
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <Link
                            href={route("user.transaksi.createUser")}
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
                            Tambah Transaksi
                        </Link>
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
                                        ID TRX
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
                                        No. Reservasi
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        Tanggal Bayar
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        Metode
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        Total
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 whitespace-nowrap">
                                {transactions.length > 0 ? (
                                    transactions.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-slate-50/80 transition-colors"
                                        >
                                            <td className="px-6 py-4 text-sm font-medium text-slate-900 max-w-[100px] truncate">
                                                <span className="text-slate-400">
                                                    TRX-
                                                </span>
                                                {item.id}
                                            </td>
                                            {isFrontOffice && (
                                                <td className="px-6 py-4 text-sm text-slate-600 font-semibold">
                                                    {item.reservasi?.tamu?.user
                                                        ?.name || "-"}
                                                </td>
                                            )}
                                            <td className="px-6 py-4 text-sm text-slate-600">
                                                <div className="font-bold text-slate-900">
                                                    RES-{item.reservasi_id}
                                                </div>
                                                {item.reservasi?.kamar
                                                    ?.nomor_kamar && (
                                                    <div className="mt-1 flex items-center gap-1">
                                                        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200">
                                                            Kamar{" "}
                                                            {
                                                                item.reservasi
                                                                    .kamar
                                                                    .nomor_kamar
                                                            }
                                                        </span>
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                                {formatDate(item.tanggal_bayar)}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.metode_pembayaran ? (
                                                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold uppercase ring-1 ring-inset ring-slate-200 tracking-wider inline-flex shadow-sm">
                                                        {item.metode_pembayaran}
                                                    </span>
                                                ) : (
                                                    <span className="text-slate-400 text-sm">
                                                        -
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-slate-900">
                                                {formatRupiah(
                                                    item.total_harga || 0,
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`px-3 py-1.5 inline-flex text-xs leading-5 font-bold rounded-full ring-1 ring-inset shadow-sm tracking-wide capitalize ${getStatusBadge(item.status_pembayaran)}`}
                                                >
                                                    {item.status_pembayaran?.replace(
                                                        /_/g,
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
                                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <h3 className="text-lg font-medium text-slate-900">
                                                    Tidak ada transaksi
                                                </h3>
                                                <p className="mt-1 text-sm text-slate-500">
                                                    Belum ada riwayat pembayaran
                                                    yang tercatat pada sistem
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
