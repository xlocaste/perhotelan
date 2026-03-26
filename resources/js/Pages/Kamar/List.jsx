import React from "react";
import { Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const StatusBadge = ({ status }) => {
    const statusStyles = {
        tersedia: "bg-green-100 text-green-800",
        terisi: "bg-red-100 text-red-800",
    };

    const style =
        statusStyles[status.toLowerCase()] || "bg-gray-100 text-gray-800";

    return (
        <span
            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${style}`}
        >
            {status}
        </span>
    );
};

const List = ({ Kamar = [] }) => {
    const handleDelete = (id) => {
        if (confirm("Yakin ingin menghapus data kamar ini?")) {
            router.delete(route("kamar.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Daftar Kamar
                </h2>
            }
        >
            <div className="bg-white shadow-sm rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Data Kamar
                        </h3>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-4">
                        <Link href={route("kamar.create")}>
                            <button className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150">
                                <svg
                                    className="w-5 h-5 mr-2 -ml-1"
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
                                Tambah Kamar
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    No
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nomor Kamar
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Jenis Kamar
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="relative px-6 py-3">
                                    <span className="sr-only">Aksi</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Kamar.length > 0 ? (
                                Kamar.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.nomor_kamar}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {item.jenis_kamar?.nama}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <StatusBadge status={item.status} />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link
                                                href={route(
                                                    "kamar.edit",
                                                    item.id,
                                                )}
                                                className="text-indigo-600 hover:text-indigo-900 mr-3"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="px-6 py-12 text-center"
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
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                            ></path>
                                        </svg>
                                        <p className="mt-2 text-sm font-medium text-gray-900">
                                            Belum ada data kamar
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Silakan tambahkan kamar baru untuk
                                            memulai.
                                        </p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default List;
