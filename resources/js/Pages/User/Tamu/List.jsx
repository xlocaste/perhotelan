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
        <div className="min-h-screen">
            <Head title="Daftar Tamu" />

            <Navbar />

            <div className="p-4">
                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                    <div className="px-6 py-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between bg-white">
                        <div className="flex-1 min-w-0">
                            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                Daftar Tamu
                            </h1>
                            <p className="mt-2 text-sm text-gray-500">
                                Kelola database tamu hotel dan informasi kontak mereka.
                            </p>
                        </div>
                        <div className="mt-4 flex sm:ml-4 sm:mt-0">
                            <Link href={route("user.create")}>
                                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200">
                                    <svg
                                        className="-ml-0.5 mr-1.5 h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                    </svg>
                                    Tambah Tamu
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        No
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Identitas Tamu
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Kontak
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Alamat
                                    </th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Operasi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {Tamu.length > 0 ? (
                                    Tamu.map((item, index) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                                            <span className="text-indigo-700 font-bold">
                                                                {item.user?.name?.charAt(0).toUpperCase()}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {item.user?.name}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            KTP: {item.no_ktp}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {item.no_hp}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {item.user?.email}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                                                <p className="truncate" title={item.alamat}>
                                                    {item.alamat}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="text-red-600 hover:text-red-900 inline-flex items-center"
                                                >
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                    </svg>
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-12 text-center">
                                            <div className="flex flex-col items-center">
                                                <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-500 font-medium">Belum ada data tamu</p>
                                                <p className="text-gray-400 text-sm mt-1">Silakan klik "Tambah Tamu" untuk memasukkan data baru.</p>
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
