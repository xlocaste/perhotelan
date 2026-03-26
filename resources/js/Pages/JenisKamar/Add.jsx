import React from "react";
import { useForm, Link, Head } from "@inertiajs/react";

const Add = () => {
    const { data, setData, post, processing, errors } = useForm({
        kode: "",
        nama: "",
        harga: "",
        harga_breakfast: "",
        fasilitas: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("jenis-kamar.store"));
    };

    return (
        <>
            <Head title="Tambah Jenis Kamar - HotelKu" />

            {/* Kontainer utama untuk memberikan jarak dari tepi layar */}
            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    {/* Judul Halaman */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Tambah Jenis Kamar Baru
                        </h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Isi form di bawah untuk menambahkan tipe kamar baru.
                        </p>
                    </div>

                    {/* Kartu Utama untuk Form */}
                    <div className="bg-white shadow-sm rounded-lg">
                        {/* Header Kartu: Tombol Kembali */}
                        <div className="px-6 py-4 border-b border-gray-200">
                            <Link
                                href={route("jenis-kamar.index")}
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
                                Kembali ke Daftar Jenis Kamar
                            </Link>
                        </div>

                        {/* Isi Kartu: Form */}
                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Field Kode */}
                                <div>
                                    <label
                                        htmlFor="kode"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Kode Jenis Kamar
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="kode"
                                            id="kode"
                                            value={data.kode}
                                            onChange={(e) =>
                                                setData("kode", e.target.value)
                                            }
                                            className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                                errors.kode
                                                    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                            }`}
                                            placeholder="Contoh: DLX, SUP, STD"
                                        />
                                        {errors.kode && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.kode}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Field Nama */}
                                <div>
                                    <label
                                        htmlFor="nama"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nama Jenis Kamar
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
                                            placeholder="Contoh: Deluxe, Superior"
                                        />
                                        {errors.nama && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.nama}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Field Harga */}
                                <div>
                                    <label
                                        htmlFor="harga"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Harga per Malam
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="number"
                                            name="harga"
                                            id="harga"
                                            value={data.harga}
                                            onChange={(e) =>
                                                setData("harga", e.target.value)
                                            }
                                            className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                                errors.harga
                                                    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                            }`}
                                            placeholder="Masukkan harga kamar"
                                        />
                                        {errors.harga && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.harga}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Field Harga Breakfast */}
                                <div>
                                    <label
                                        htmlFor="harga_breakfast"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Harga Termasuk Breakfast
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="number"
                                            name="harga_breakfast"
                                            id="harga_breakfast"
                                            value={data.harga_breakfast}
                                            onChange={(e) =>
                                                setData(
                                                    "harga_breakfast",
                                                    e.target.value,
                                                )
                                            }
                                            className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                                errors.harga_breakfast
                                                    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                            }`}
                                            placeholder="Masukkan harga termasuk sarapan"
                                        />
                                        {errors.harga_breakfast && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.harga_breakfast}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Field Fasilitas */}
                                <div>
                                    <label
                                        htmlFor="fasilitas"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Fasilitas
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="fasilitas"
                                            name="fasilitas"
                                            value={data.fasilitas}
                                            onChange={(e) =>
                                                setData(
                                                    "fasilitas",
                                                    e.target.value,
                                                )
                                            }
                                            rows="4"
                                            className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                                errors.fasilitas
                                                    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                            }`}
                                            placeholder="Jelaskan fasilitas yang tersedia"
                                        ></textarea>
                                        {errors.fasilitas && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.fasilitas}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Tombol Submit */}
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
                                        Simpan Data
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

export default Add;
