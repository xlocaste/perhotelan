import React from "react";
import { router, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const List = ({
    transaksi = [],
    totalPendapatan = 0,
    filter = {},
}) => {
    const { data, setData } = useForm({
        tanggal_awal: filter?.tanggal_awal || "",
        tanggal_akhir: filter?.tanggal_akhir || "",
    });

    const handleFilter = (e) => {
        e.preventDefault();

        router.get(route("laporan.transaksi"), {
            tanggal_awal: data.tanggal_awal,
            tanggal_akhir: data.tanggal_akhir,
        });
    };

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
            month: "long",
            year: "numeric",
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Laporan Transaksi
                    </h1>
                    <p className="text-gray-500">
                        Data transaksi dan pendapatan hotel
                    </p>
                </div>

                {/* Filter */}
                <div className="bg-white rounded-lg shadow border p-6 mb-6">
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

                        <div className="flex items-end gap-2">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                            >
                                Filter
                            </button>

                            <a
                                href={route("laporan.cetak", {
                                    tanggal_awal: data.tanggal_awal,
                                    tanggal_akhir: data.tanggal_akhir,
                                })}
                                target="_blank"
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                            >
                                Cetak PDF
                            </a>
                        </div>
                    </form>
                </div>

                {/* Card Pendapatan */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <p className="text-sm text-green-700">
                        Total Pendapatan
                    </p>

                    <h2 className="text-3xl font-bold text-green-600">
                        {formatRupiah(totalPendapatan)}
                    </h2>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg shadow border overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-3 text-left">
                                        No
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Tamu
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Kamar
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Jenis Kamar
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Lama Menginap
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Harga / Malam
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Total Harga
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Metode
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Status
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Tanggal Bayar
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {transaksi.length > 0 ? (
                                    transaksi.map((item, index) => (
                                        <tr
                                            key={item.id}
                                            className="border-t hover:bg-gray-50"
                                        >
                                            <td className="px-4 py-3">
                                                {index + 1}
                                            </td>

                                            <td className="px-4 py-3">
                                                {
                                                    item.reservasi?.tamu?.user
                                                        ?.name
                                                }
                                            </td>

                                            <td className="px-4 py-3">
                                                {
                                                    item.reservasi?.kamar
                                                        ?.nomor_kamar
                                                }
                                            </td>

                                            <td className="px-4 py-3">
                                                {
                                                    item.reservasi?.kamar
                                                        ?.jenis_kamar?.nama
                                                }
                                            </td>

                                            <td className="px-4 py-3">
                                                {item.lama_menginap} Hari
                                            </td>

                                            <td className="px-4 py-3">
                                                {formatRupiah(
                                                    item.harga_per_malam
                                                )}
                                            </td>

                                            <td className="px-4 py-3 font-semibold text-green-600">
                                                {formatRupiah(
                                                    item.total_harga
                                                )}
                                            </td>

                                            <td className="px-4 py-3">
                                                {
                                                    item.metode_pembayaran
                                                }
                                            </td>

                                            <td className="px-4 py-3">
                                                <span
                                                    className={`px-2 py-1 rounded text-xs font-medium ${
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

                                            <td className="px-4 py-3">
                                                {formatDate(
                                                    item.tanggal_bayar
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="10"
                                            className="text-center py-6 text-gray-500"
                                        >
                                            Tidak ada data transaksi
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default List;
