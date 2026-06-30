import React from "react";
import { useForm, Link } from "@inertiajs/react";
import Navbar from "../_components/Navbar";

const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(angka || 0);
};

const formatDate = (tanggal) => {
    if (!tanggal) return "-";

    return new Date(tanggal).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
};

const List = ({ transaksi = [], totalPendapatan = 0, filter = {} }) => {
    const { data, setData, get } = useForm({
        tanggal_awal: filter?.tanggal_awal || "",
        tanggal_akhir: filter?.tanggal_akhir || "",
    });

    const handleFilter = (e) => {
        e.preventDefault();

        get(route("user.laporan.index"));
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                            Laporan Transaksi
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Rekapitulasi seluruh transaksi hotel untuk
                            pemantauan pendapatan.
                        </p>
                    </div>

                    <a
                        href={route("user.laporan.cetak", {
                            tanggal_awal: data.tanggal_awal,
                            tanggal_akhir: data.tanggal_akhir,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-xl hover:bg-red-700 hover:shadow-md transition-all ring-1 ring-red-700/50"
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
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        Cetak PDF
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                    {/* Filter Section */}
                    <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
                        <form
                            onSubmit={handleFilter}
                            className="flex flex-col sm:flex-row gap-4 items-end"
                        >
                            <div className="w-full sm:w-1/3">
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                    Tanggal Awal
                                </label>
                                <input
                                    type="date"
                                    value={data.tanggal_awal}
                                    onChange={(e) =>
                                        setData("tanggal_awal", e.target.value)
                                    }
                                    className="w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5 transition-shadow"
                                />
                            </div>

                            <div className="w-full sm:w-1/3">
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                    Tanggal Akhir
                                </label>
                                <input
                                    type="date"
                                    value={data.tanggal_akhir}
                                    onChange={(e) =>
                                        setData("tanggal_akhir", e.target.value)
                                    }
                                    className="w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5 transition-shadow"
                                />
                            </div>

                            <div className="w-full sm:w-1/3">
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-xl ring-1 ring-inset ring-indigo-200 hover:bg-indigo-100 hover:text-indigo-800 transition-colors"
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
                                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                        />
                                    </svg>
                                    Filter Data
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Total Pendapatan Card */}
                    <div className="lg:col-span-1 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl shadow-md border border-emerald-600 p-6 flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 text-emerald-400/20 group-hover:scale-110 transition-transform duration-700 ease-out">
                            <svg
                                className="w-24 h-24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-emerald-50 mb-1 relative z-10 flex items-center gap-2">
                            Total Pendapatan
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white relative z-10 tracking-tight">
                            {formatRupiah(totalPendapatan)}
                        </h2>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50/80">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        Tanggal Bayar
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        Tamu
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        Kamar
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        Metode Pembayaran
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        Total Harga
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                                {transaksi.length > 0 ? (
                                    transaksi.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-slate-50/80 transition-colors"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 font-medium">
                                                {formatDate(item.tanggal_bayar)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                                <div className="font-semibold text-slate-900">
                                                    {item.reservasi?.tamu?.user
                                                        ?.name || "-"}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                                <div className="flex items-center gap-2">
                                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-xs ring-1 ring-indigo-100 shadow-sm">
                                                        {item.reservasi?.kamar
                                                            ?.nomor_kamar ||
                                                            "-"}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 capitalize">
                                                {item.metode_pembayaran || "-"}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ring-1 ring-inset tracking-wide capitalize shadow-sm ${
                                                        item.status_pembayaran?.toLowerCase() ===
                                                        "lunas"
                                                            ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                                                            : "bg-amber-50 text-amber-700 ring-amber-200"
                                                    }`}
                                                >
                                                    {item.status_pembayaran ||
                                                        "Pending"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-bold text-right">
                                                {formatRupiah(item.total_harga)}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="6"
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
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                                <h3 className="text-lg font-medium text-slate-900">
                                                    Belum Ada Transaksi
                                                </h3>
                                                <p className="mt-1 text-sm text-slate-500">
                                                    Sesuaikan filter tanggal
                                                    untuk menemukan data riwayat
                                                    transaksi.
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
