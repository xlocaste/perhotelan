import React from "react";
import { useForm, Link, Head } from "@inertiajs/react";

const Update = ({ tamu }) => {
    const { data, setData, put, processing, errors } = useForm({
        no_ktp: tamu.no_ktp || "",
        nama: tamu.nama || "",
        alamat: tamu.alamat || "",
        no_hp: tamu.no_hp || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("tamu.update", tamu.id));
    };

    return (
        <>
            <Head title="Edit Tamu - HotelKu" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Edit Data Tamu
                        </h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Perbarui informasi tamu pada form di bawah ini.
                        </p>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <Link
                                href={route("tamu.index")}
                                className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
                            >
                                <svg
                                    className="w-4 h-4 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    ></path>
                                </svg>
                                Kembali ke Daftar Tamu
                            </Link>
                        </div>

                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="no_ktp"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nomor KTP
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="no_ktp"
                                            id="no_ktp"
                                            value={data.no_ktp}
                                            onChange={(e) =>
                                                setData(
                                                    "no_ktp",
                                                    e.target.value,
                                                )
                                            }
                                            autoFocus
                                            className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                                errors.no_ktp
                                                    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                            }`}
                                            placeholder="Masukkan nomor KTP tamu"
                                        />
                                        {errors.no_ktp && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.no_ktp}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="nama"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="nama"
                                            id="nama"
                                            value={data.nama}
                                            onChange={(e) =>
                                                setData("nama", e.target.value)
                                            }
                                            className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                                errors.nama
                                                    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                            }`}
                                            placeholder="Masukkan nama lengkap tamu"
                                        />
                                        {errors.nama && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.nama}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="alamat"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Alamat Lengkap
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="alamat"
                                            name="alamat"
                                            value={data.alamat}
                                            onChange={(e) =>
                                                setData(
                                                    "alamat",
                                                    e.target.value,
                                                )
                                            }
                                            rows="3"
                                            className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                                errors.alamat
                                                    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                            }`}
                                            placeholder="Masukkan alamat lengkap tamu"
                                        ></textarea>
                                        {errors.alamat && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.alamat}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="no_hp"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nomor Telepon / HP
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="tel"
                                            name="no_hp"
                                            id="no_hp"
                                            value={data.no_hp}
                                            onChange={(e) =>
                                                setData("no_hp", e.target.value)
                                            }
                                            className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                                errors.no_hp
                                                    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                            }`}
                                            placeholder="Masukkan nomor telepon aktif"
                                        />
                                        {errors.no_hp && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.no_hp}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-end pt-4 border-t border-gray-200">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-flex items-center px-6 py-3 bg-indigo-600 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150 disabled:opacity-50"
                                    >
                                        {processing && (
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                        )}
                                        Perbarui Data Tamu
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Update;
