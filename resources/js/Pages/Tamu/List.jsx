import React from "react";
import { Link, router } from "@inertiajs/react";

// Nama komponen 'List' dipertahankan, tapi 'GuestList' bisa menjadi nama yang lebih deskriptif.
const List = ({ Tamu }) => {
    const handleDelete = (id) => {
        // Teks konfirmasi sedikit diperbaiki untuk kejelasan
        if (confirm("Yakin ingin menghapus data tamu ini?")) {
            router.delete(route("tamu.destroy", id));
        }
    };

    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                {/* Header: Judul dan Tombol Tambah */}
                <div className="p-6 bg-white border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Data Tamu
                        </h2>
                        <Link href={route("tamu.create")}>
                            <button className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    ></path>
                                </svg>
                                Tambah Tamu
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Tabel Data */}
                <div className="p-6 bg-gray-50">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        No
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        No KTP
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Nama Lengkap
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Alamat
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        No. HP
                                    </th>
                                    <th
                                        scope="col"
                                        className="relative px-6 py-3"
                                    >
                                        <span className="sr-only">Aksi</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {Tamu.length > 0 ? (
                                    Tamu.map((item, index) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {item.no_ktp}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {item.nama}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900">
                                                {item.alamat}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {item.no_hp}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                                                {/* Tombol Edit */}
                                                <Link
                                                    href={route(
                                                        "tamu.edit",
                                                        item.id,
                                                    )} // PERBAIKAN: Menggunakan helper route()
                                                    className="text-indigo-600 hover:text-indigo-900 font-semibold"
                                                >
                                                    Edit
                                                </Link>
                                                {/* Tombol Hapus */}
                                                <button
                                                    onClick={() =>
                                                        handleDelete(item.id)
                                                    }
                                                    className="text-red-600 hover:text-red-900 font-semibold"
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    // State saat data kosong
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="px-6 py-12 text-center text-sm text-gray-500"
                                        >
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                                ></path>
                                            </svg>
                                            <p className="mt-2">
                                                Belum ada data tamu.
                                            </p>
                                            <p className="text-xs">
                                                Silakan tambahkan tamu baru
                                                untuk memulai.
                                            </p>
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
