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

const List = ({
    transaksi = [],
    totalPendapatan = 0,
    filter = {},
}) => {
    const { data, setData, get } = useForm({
        tanggal_awal: filter?.tanggal_awal || "",
        tanggal_akhir: filter?.tanggal_akhir || "",
    });

    const handleFilter = (e) => {
        e.preventDefault();

        get(route("user.laporan.index"));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto py-8 px-4">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Laporan Transaksi
                        </h1>
                        <p className="text-sm text-gray-500">
                            Rekap transaksi hotel.
                        </p>
                    </div>

                    <a
                        href={route("user.laporan.cetak", {
                            tanggal_awal: data.tanggal_awal,
                            tanggal_akhir: data.tanggal_akhir,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        Cetak PDF
                    </a>
                </div>

                {/* Filter */}
                <div className="bg-white rounded-xl shadow border p-6 mb-6">
                    <form
                        onSubmit={handleFilter}
                        className="grid md:grid-cols-3 gap-4"
                    >
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Tanggal Awal
                            </label>

                            <input
                                type="date"
                                value={data.tanggal_awal}
                                onChange={(e) =>
                                    setData(
                                        "tanggal_awal",
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-lg border-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Tanggal Akhir
                            </label>

                            <input
                                type="date"
                                value={data.tanggal_akhir}
                                onChange={(e) =>
                                    setData(
                                        "tanggal_akhir",
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-lg border-gray-300"
                            />
                        </div>

                        <div className="flex items-end">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                            >
                                Filter
                            </button>
                        </div>
                    </form>
                </div>

                {/* Total Pendapatan */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                    <p className="text-sm text-green-700">
                        Total Pendapatan
                    </p>

                    <h2 className="text-3xl font-bold text-green-800 mt-2">
                        {formatRupiah(totalPendapatan)}
                    </h2>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow border overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                                        Tanggal Bayar
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                                        Tamu
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                                        Kamar
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                                        Metode
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                                        Status
                                    </th>

                                    <th className="px-6 py-3 text-right text-xs font-semibold uppercase">
                                        Total
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {transaksi.length > 0 ? (
                                    transaksi.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 text-sm">
                                                {formatDate(
                                                    item.tanggal_bayar
                                                )}
                                            </td>

                                            <td className="px-6 py-4 text-sm">
                                                {
                                                    item.reservasi?.tamu
                                                        ?.user?.name
                                                }
                                            </td>

                                            <td className="px-6 py-4 text-sm">
                                                {
                                                    item.reservasi?.kamar
                                                        ?.nomor_kamar
                                                }
                                            </td>

                                            <td className="px-6 py-4 text-sm">
                                                {
                                                    item.metode_pembayaran
                                                }
                                            </td>

                                            <td className="px-6 py-4">
                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                        item.status_pembayaran ===
                                                        "lunas"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-yellow-100 text-yellow-700"
                                                    }`}
                                                >
                                                    {
                                                        item.status_pembayaran
                                                    }
                                                </span>
                                            </td>

                                            <td className="px-6 py-4 text-right font-semibold">
                                                {formatRupiah(
                                                    item.total_harga
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="text-center py-10 text-gray-500"
                                        >
                                            Belum ada data transaksi.
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
