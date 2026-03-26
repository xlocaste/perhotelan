import React from "react";
import { useForm, Link } from "@inertiajs/react";


const Update = ({ kamar, jenisKamar = [] }) => {
    const { data, setData, put, processing, errors } = useForm({
        nomor_kamar: kamar.nomor_kamar || "",
        jenis_kamar_id: kamar.jenis_kamar_id || "",
        status: kamar.status || "tersedia",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("kamar.update", kamar.id));
    };

    return (
        <div className="py-12">
            <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Edit Data Kamar
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                        Perbarui informasi kamar pada form di bawah ini.
                    </p>
                </div>

                <div className="bg-white shadow-sm rounded-lg">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <Link
                            href={route("kamar.index")}
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
                            Kembali ke Daftar Kamar
                        </Link>
                    </div>

                    <div className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="nomor_kamar"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nomor Kamar
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="nomor_kamar"
                                        id="nomor_kamar"
                                        value={data.nomor_kamar}
                                        onChange={(e) =>
                                            setData(
                                                "nomor_kamar",
                                                e.target.value,
                                            )
                                        }
                                        className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                            errors.nomor_kamar
                                                ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                        placeholder="Contoh: 101"
                                    />
                                    {errors.nomor_kamar && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.nomor_kamar}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="jenis_kamar_id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Jenis Kamar
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="jenis_kamar_id"
                                        name="jenis_kamar_id"
                                        value={data.jenis_kamar_id}
                                        onChange={(e) =>
                                            setData(
                                                "jenis_kamar_id",
                                                e.target.value,
                                            )
                                        }
                                        className={`block w-full px-3 py-2 border bg-white rounded-md shadow-sm focus:outline-none sm:text-sm ${
                                            errors.jenis_kamar_id
                                                ? "border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                    >
                                        <option value="">
                                            -- Pilih Jenis Kamar --
                                        </option>
                                        {jenisKamar.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.nama}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.jenis_kamar_id && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.jenis_kamar_id}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="status"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Status
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="status"
                                        name="status"
                                        value={data.status}
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                        className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="tersedia">
                                            Tersedia
                                        </option>
                                        <option value="terisi">Terisi</option>
                                        <option value="maintenance">
                                            Maintenance
                                        </option>
                                    </select>
                                    {errors.status && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.status}
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
                                    Perbarui Data
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
