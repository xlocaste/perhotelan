import React from "react";
import { Link, router, Head } from "@inertiajs/react";
import Navbar from "../_components/Navbar";

const List = ({ Tamu = [] }) => {
    const handleDelete = (id) => {
        if (confirm("Yakin ingin menghapus data tamu ini?")) {
            router.delete(route("tamu.destroy", id));
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title="Daftar Tamu" />

            <Navbar />

            <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                            Daftar Tamu
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Kelola database tamu hotel dan informasi kontak
                            mereka.
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <Link
                            href={route("user.create")}
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
                            Tambah Tamu
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
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-16"
                                    >
                                        No
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        Identitas Tamu
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        Kontak
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        Alamat
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 whitespace-nowrap">
                                {Tamu.length > 0 ? (
                                    Tamu.map((item, index) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-slate-50/80 transition-colors"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-500">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center ring-1 ring-inset ring-indigo-100 shadow-sm">
                                                            <span className="text-indigo-700 font-bold text-lg">
                                                                {item.user?.name
                                                                    ?.charAt(0)
                                                                    .toUpperCase()}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-bold text-slate-900">
                                                            {item.user?.name}
                                                        </div>
                                                        <div className="text-xs font-medium text-slate-500 mt-0.5">
                                                            KTP: {item.no_ktp}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-semibold text-slate-700">
                                                    {item.no_hp}
                                                </div>
                                                <div className="text-sm text-slate-500">
                                                    {item.user?.email}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600 max-w-xs">
                                                <p
                                                    className="truncate"
                                                    title={item.alamat}
                                                >
                                                    {item.alamat}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button
                                                    onClick={() =>
                                                        handleDelete(item.id)
                                                    }
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 text-sm font-semibold rounded-lg hover:bg-red-100 hover:text-red-700 ring-1 ring-inset ring-red-200 shadow-sm transition-all"
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
                                                            strokeWidth="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        />
                                                    </svg>
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="5"
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
                                                        strokeWidth="1"
                                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                    />
                                                </svg>
                                                <h3 className="text-lg font-medium text-slate-900">
                                                    Belum ada data tamu
                                                </h3>
                                                <p className="mt-1 text-sm text-slate-500">
                                                    Silakan klik "Tambah Tamu"
                                                    untuk memasukkan data baru.
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
